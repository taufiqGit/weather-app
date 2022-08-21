import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = 'c07467bd8aeb3a9268f86996ec40c2c6'
const WEATHER_API = 'https://api.openweathermap.org/data/2.5'
const GEOCODE_API = 'https://api.openweathermap.org/geo/1.0/direct'

const currentWeather = {
    temp: 0,
    icon: '',
    conditionWeather: '',
    location: '',
    visibility: 0,
    windSpeed: 0,
    humidity: 0,
    pressure: 0
}

const initialState = {
    currentWeather,
    listForecast: [],
    listSearchRegion: [],
    currentUnit: 'celcius', // 'celcius' | 'fahrenheit
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    statuSearch: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchCurrentWeather = createAsyncThunk('weather/fetchCurrentWeather', async (cord)=>{
    const response = await axios.get(`${WEATHER_API}/weather?appid=${API_KEY}&lat=${cord.latitude}&lon=${cord.longitude}`)
    
    return response.data
})

export const fetchForecast = createAsyncThunk('weather/fetchForecast', async (cord)=>{
    const response = await axios.get(`${WEATHER_API}/forecast?appid=${API_KEY}&lat=${cord.latitude}&lon=${cord.longitude}`)
    return response.data    
})

export const fetchSearch = createAsyncThunk('weather/fetchSearch', async (payload)=>{
     const response = await axios.get(`${GEOCODE_API}?appid=${API_KEY}&q=${payload.q}&limit=8`)     
     return response.data    
 })

const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        convertCelciusToFahrenheit(state, action){
            state.currentUnit = 'fahrenheit'
            let listForecast = current(state.listForecast)
            
            const convertTemp = listForecast.map(item => {
                return {
                    ...item,
                    temp_min: (item.temp_min * 9 / 5) + 32,
                    temp_max: (item.temp_max * 9 / 5) + 32
                }
            })

            state.listForecast = convertTemp
            state.currentWeather.temp = (state.currentWeather.temp * 9 / 5) + 32
        },
        convertFahrenheitToCelcius(state, action){
            state.currentUnit = 'celcius'
            let listForecast = current(state.listForecast)

            const convertTemp = listForecast.map(item => {
                return {
                    ...item,
                    temp_min : (item.temp_min - 32) * 5 / 9,
                    temp_max : (item.temp_max - 32) * 5 / 9
                }
            })

            state.listForecast = convertTemp
            state.currentWeather.temp = (state.currentWeather.temp - 32) * 5 / 9
        },       
    },
    extraReducers(builder){
      builder
        .addCase(fetchCurrentWeather.pending, (state, action) =>{
            state.status = "loading"
        })
        .addCase(fetchCurrentWeather.fulfilled, (state, action)=>{
            state.status = 'succeeded'
            state.currentUnit = 'celcius'
            const convertKelvinToCelcius = (temp)=> temp - 273.15
            const value = {
                temp: convertKelvinToCelcius(action.payload.main.temp),
                icon: action.payload.weather[0].icon,
                conditionWeather: action.payload.weather[0].main,
                location: action.payload.name,
                visibility: action.payload.visibility,
                windSpeed: action.payload.wind.speed,
                humidity: action.payload.main.humidity,
                pressure: action.payload.main.pressure
            }
            state.currentWeather = value
        })
        .addCase(fetchCurrentWeather.rejected, (state, action)=>{
            state.status = 'failed'
            console.log(action.error.message);
        })
        .addCase(fetchForecast.pending, (state, action)=>{
            state.status = "loading"
        })
        .addCase(fetchForecast.fulfilled, (state, action)=>{
            state.status = "succeeded"
            state.currentUnit = 'celcius'
            let listForecast = action.payload.list
            let listDate = []
            let getAllDt = listForecast.map(dt =>  dt.dt_txt.split(' ')[0])

            for (let dt of getAllDt) {
               if(!listDate.includes(dt)) listDate.push(dt)
            }

            let getAllDtTemp = listForecast.map(val => {
                return {temp: val.main.temp, date: val.dt_txt.split(' ')[0], weather: val.weather[0]}
            })

            let listTemp = listDate.map(dt => {
                return { date: dt, list_temp: [], list_weather: []}
            })

            for (let tempAll of getAllDtTemp) {
                for (let temp5Day of listTemp) {
                    if (tempAll.date === temp5Day.date) {
                        let tempConvertKelvinToCelcius = tempAll.temp - 273.15
                        temp5Day.list_temp.push(tempConvertKelvinToCelcius.toFixed())
                        temp5Day.list_temp.sort((a, b) => a - b)
                        temp5Day.list_weather.push(tempAll.weather)
                    }
            }}

            for (let temp5Day of listTemp) {
                temp5Day.temp_min = Number(temp5Day.list_temp[0]) 
                temp5Day.temp_max = Number(temp5Day.list_temp[temp5Day.list_temp.length - 1]) 
                temp5Day.time = new Date(temp5Day.date).getTime()
                if (temp5Day.list_weather.length >= 5) {
                    temp5Day.weather = temp5Day.list_weather[4]
                } else {
                    temp5Day.weather = temp5Day.list_weather[0]
                }
            }

            const finalListForecast = listTemp.map(val =>{
                return {
                    date: val.date, 
                    time: val.time, 
                    temp_min: val.temp_min, 
                    temp_max: val.temp_max, 
                    icon: val.weather.icon
                }
            }).filter(val => {
                let time = new Date()
                time.setHours(12)
            // console.log(val.time, time.getTime(), 'jkjk');
                return val.time > time 
            })

            state.listForecast = finalListForecast
        })
        .addCase(fetchForecast.rejected, (state, action)=>{
            state.status = 'failed'
        })
        .addCase(fetchSearch.pending, (state)=>{
            state.statuSearch = "loading"
        })
        .addCase(fetchSearch.fulfilled, (state, action)=>{
            state.statuSearch = "succeeded"
            action.payload.map(item => {
                console.log(item, 'guk');
                return {...item}
            })
            if (action.payload.length > 0) {
                state.listSearchRegion = action.payload
            } else {
                state.listSearchRegion[0] = 'Not Found !!'
            }
        })
        .addCase(fetchSearch.rejected, (state, action)=>{
            state.statuSearch = 'failed'
            console.log(action.payload, 'error get list search');
        })
    }
})

export const selectWeather = (state) => state.weather.currentWeather
export const selectForecast = (state) => state.weather.listForecast
export const selectStatus = (state) => state.weather.status
export const selectCurrentUnit = (state) => state.weather.currentUnit
export const selectListRegion = (state) => state.weather.listSearchRegion

export const { convertCelciusToFahrenheit, convertFahrenheitToCelcius } = WeatherSlice.actions

export default WeatherSlice.reducer