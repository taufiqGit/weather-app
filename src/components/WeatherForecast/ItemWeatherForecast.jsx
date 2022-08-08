export default function ItemWeatherForecast(params) {
    return (
        <div className="w-full h-48 flex flex-col items-center justify-center bg-black-1">
            <p className="text-lg text-white">Tomorrow</p>
            <img className="w-16" src="/assets/HeavyRain.png" alt="asd" />
            <p className="mt-5">
                <span className="text-white mr-3">21℃</span>
                <span className="text-zinc-400 ml-3">34℃</span>
            </p>
        </div>
    )
}