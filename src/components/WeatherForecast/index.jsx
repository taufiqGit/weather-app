import ItemWeatherForecast from "./ItemWeatherForecast";

export default function WeatherForecast() {
    return (
        <section className="w-full bg-black-2 py-5 h-auto px-6 grid gap-6 grid-cols-2 lg:grid-cols-5">
            <ItemWeatherForecast/>
            <ItemWeatherForecast/>
            <ItemWeatherForecast/>
            <ItemWeatherForecast/>
            <ItemWeatherForecast/>
        </section>
    )
}