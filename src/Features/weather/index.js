import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather?appid=c07467bd8aeb3a9268f86996ec40c2c6'

const initialState = {
    currentWeather: null,
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchCurrentWeather = createAsyncThunk('weather/fetchCurrentWeather', async (cord)=>{
    console.log(cord.lat);
    const response = await axios.get(`${WEATHER_API}&lat=${cord.lat}&lon=${cord.lon}`)
    console.log(response.data);
    return response.data
})

const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
    extraReducers(builder){
      builder
        .addCase(fetchCurrentWeather.pending, (state, action) =>{
            state.status = "loading"
        })
        .addCase(fetchCurrentWeather.fulfilled, (state, action)=>{
            state.status = 'succeeded'
            const convertKelvinToCelcius = (temp)=> temp - 273.15
            action.payload.main.temp = convertKelvinToCelcius(action.payload.main.temp)
            action.payload.main.temp_min = convertKelvinToCelcius(action.payload.main.temp_min)
            action.payload.main.temp_max = convertKelvinToCelcius(action.payload.main.temp_max)
            state.currentWeather = action.payload
           // console.log(action.payload)
        })
        .addCase(fetchCurrentWeather.rejected, (state, action)=>{
            state.status = 'failed'
            console.log(action.error.message);
        })
    }
})

export const selectWeather = (state) => state.weather.currentWeather
export const selectStatus = (state) => state.weather.status

export default WeatherSlice.reducer