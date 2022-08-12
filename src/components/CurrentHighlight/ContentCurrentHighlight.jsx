import { useSelector } from "react-redux"
import { selectStatus, selectWeather } from "../../Features/weather"
import DateNow from "./DateNow"

export default function ContentCurrentHighlight(params) {
    const currentWeather = useSelector(selectWeather)
    const statusRequest = useSelector(selectStatus)

    if (statusRequest === 'loading') {
        return (
            <div className="text-white">loading</div>
        )
    }
    return (
        <div className="w-full flex flex-col items-center">
            <img className="w-40 mt-20" src={`/assets/${currentWeather?.weather[0]?.icon}.png`} alt="xixixi" />
            <h2 className="text-9xl text-white mt-2">{Math.round(currentWeather?.main?.temp)}<span className="text-3xl text-zinc-400">℃</span></h2>
            <p className="text-3xl text-zinc-400 mt-8 font-semibold">{currentWeather?.weather[0].main}</p>
            <DateNow/>
            <div className="flex mt-8">
                <img className="w-5" src="/assets/location-city.svg" alt="location" />
                <span className="text-zinc-400 ml-1">{currentWeather?.name}</span>
            </div>
        </div>       
    )
}