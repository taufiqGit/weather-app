import { useSelector } from "react-redux";
import { selectStatus, selectWeather } from "../../Features/weather";
import ItemHighlightToday from "./ItemHighlightToday";

export default function HighlightToday(params) {
    const currentWeather = useSelector(selectWeather)
    const statusRequest = useSelector(selectStatus)
    
    if (statusRequest === 'loading') {
        return (
            <div className="text-white">loading</div>
        )
    }
    return (
        <section className="w-full h-full px-6 py-4 lg:mx-auto lg:max-w-4xl lg:w-auto">
            <h2 className="text-white font-bold text-2xl mt-3">Today’s Hightlights</h2>
            <div className="w-full lg:mt-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                <ItemHighlightToday type="Wind status" value={currentWeather?.wind?.speed} unit="mph"/>
                <ItemHighlightToday type="Humidity" value={currentWeather?.main?.humidity} unit="%"/>
                <ItemHighlightToday type="Visibility" value={currentWeather?.visibility} unit="%"/>
                <ItemHighlightToday type="Air Pressure" value={currentWeather?.main?.pressure} unit="mb"/>
            </div>
        </section>
    )
}