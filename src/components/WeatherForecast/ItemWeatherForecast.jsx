import { useSelector } from "react-redux"
import { selectCurrentUnit } from "../../Features/weather"

export default function ItemWeatherForecast({ date, idx, tempMin, tempMax, icon }) {
    const currentUnit = useSelector(selectCurrentUnit)
    let dates 
    let ck = idx += 1

    if (ck === 1) {
        dates = "Tomorrow"
    } else {
        const Month = ['Jan', 'Feb', 'Mar', 'Apr', 'Mey', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des']
        const Day = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const d = new Date(date)
        dates = `${Day[d.getDay()]}, ${d.getDate()} ${Month[d.getMonth()]}`
    }

    return (
        <div className="w-full h-48 flex flex-col items-center justify-center bg-black-1">
            <p className="text-lg text-white">{dates}</p>
            <img className="w-20 h-16 object-contain object-center mt-4" src={`/assets/${icon}.png`} alt="icon weather"/>
            <p className="mt-4">
                <span className="text-white mr-3">{tempMin.toFixed()}{currentUnit === 'celcius' ? '℃' : '℉'}</span>
                <span className="text-zinc-400 ml-3">{tempMax.toFixed()}{currentUnit === 'celcius' ? '℃' : '℉'}</span>
            </p>
        </div>
    )
}