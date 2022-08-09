import BtnSetScaleTemp from "./BtnSetScaleTemp";
import ItemWeatherForecast from "./ItemWeatherForecast";

export default function WeatherForecast() {
    return (
        <section className="w-full py-5 h-auto px-6 lg:mx-auto lg:max-w-4xl lg:w-auto">
            <div className="w-full flex justify-end">
                <BtnSetScaleTemp>℃</BtnSetScaleTemp>
                <BtnSetScaleTemp>℉</BtnSetScaleTemp>
            </div>
            <div className="lg:mt-8 grid gap-6 grid-cols-2 lg:grid-cols-5">
               <ItemWeatherForecast/>
                <ItemWeatherForecast/>
                <ItemWeatherForecast/>
                <ItemWeatherForecast/>
                <ItemWeatherForecast/> 
            </div>
        </section>
    )
}