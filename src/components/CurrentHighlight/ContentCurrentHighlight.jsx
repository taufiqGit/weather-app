import { useSelector } from "react-redux"
import { selectCurrentUnit, selectStatus, selectWeather } from "../../Features/weather"
import DateNow from "./DateNow"

export default function ContentCurrentHighlight(params) {
    const currentWeather = useSelector(selectWeather)
    const statusRequest = useSelector(selectStatus)
    const currentUnit = useSelector(selectCurrentUnit)

    if (statusRequest === 'loading') {
        return (
            <div className="text-white text-lg mt-5 text-center">loading...</div>
        )
    }

    return (
        <div className="w-full flex flex-col items-center">
            {currentWeather.icon && <img className="w-40 mt-20" src={`/assets/${currentWeather?.icon}.png`} alt="xixixi" />}
            <h2 className="text-9xl text-white mt-2">
                {Math.round(currentWeather?.temp)}
                <span className="text-3xl text-zinc-400">
                    {currentUnit === 'celcius' ? '℃' : '℉'}
                </span>
            </h2>
            <p className="text-3xl text-zinc-400 mt-8 font-semibold">{currentWeather?.conditionWeather}</p>
            <DateNow/>
            <div className="flex mt-8">
                <img className="w-5" src="/assets/location-city.svg" alt="location" />
                <span className="text-zinc-400 ml-1">{currentWeather?.location}</span>
            </div>
        </div>       
    )
}