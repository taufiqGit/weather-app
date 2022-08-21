import { useDispatch, useSelector } from "react-redux";
import { convertCelciusToFahrenheit, convertFahrenheitToCelcius, selectCurrentUnit, selectForecast, selectStatus } from "../../Features/weather";
import BtnSetScaleTemp from "./BtnSetScaleTemp";
import ItemWeatherForecast from "./ItemWeatherForecast";

export default function WeatherForecast() {
    const dispatch = useDispatch()
    const listForecast = useSelector(selectForecast)
    const statusRequest = useSelector(selectStatus)
    const currentUnit = useSelector(selectCurrentUnit)
    
    const handleToFahrenheit =()=>{
        if (currentUnit === 'celcius') {
            dispatch(convertCelciusToFahrenheit())
        }
    }

    const handleToCelcius =()=>{
        if (currentUnit === 'fahrenheit') {
            dispatch(convertFahrenheitToCelcius())
        }
    }

    if (statusRequest === "loading") {
        return (
            <section className="w-full py-5 h-auto px-6 lg:mx-auto lg:max-w-4xl lg:w-auto">
                <div className="text-white text-lg mt-5 text-center">loading...</div>
            </section>
        )
    }

    return (
        <section className="w-full py-5 h-auto px-6 lg:mx-auto lg:max-w-4xl lg:w-auto">
            <div className="w-full hidden lg:flex justify-end">
                <BtnSetScaleTemp click={handleToCelcius} isUnitActive={currentUnit === 'celcius'}>℃</BtnSetScaleTemp>
                <BtnSetScaleTemp click={handleToFahrenheit} isUnitActive={currentUnit === 'fahrenheit'}>℉</BtnSetScaleTemp>
            </div>
            <div className="lg:mt-8 grid gap-6 grid-cols-2 lg:grid-cols-5">
                {
                       listForecast.length > 0 ? listForecast.map((item, idx) => (
                            <ItemWeatherForecast key={idx} 
                                idx={idx} date={item.date} 
                                tempMin={item.temp_min} 
                                tempMax={item.temp_max}
                                icon={item.icon}
                            />
                        )) : ''                         
                }
            </div>
        </section>
    )
}