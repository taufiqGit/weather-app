const WindDirection =()=>(
            <div className="flex items-center mt-6">
                <div className="w-5 h-5 flex justify-center items-center rounded-full bg-gray-1">
                    <img className="w-3 rotate-180" src="/assets/cursor.svg" alt="img" />
                </div>
                <span className="text-[13px] ml-2 text-white">WSW</span>
            </div>   
)

const HumidityPercent =({ percent })=>(
    <div className="w-3/4 mx-auto mt-3">
        <div className="flex justify-between text-xs text-white">
            <span>0</span>
            <span>50</span>
            <span>100</span>
        </div>
        <div className="h-1.5 w-full relative rounded my-1 overflow-hidden bg-white">
            <div className="absolute h-full bg-amber-300 z-10 left-0 top-0 bottom-0 " style={{ width: `${percent}%`}}/>
        </div>
        <span className="block text-end text-white">%</span>
    </div>
)

export default function ItemHighlightToday({ type, value, unit, windDirection, humidityPercent}) {
    return (
        <div className="w-full my-4 lg:my-0 h-auto min-h-[150px] flex flex-col items-center py-5 bg-black-1">
            <p className="text-white ">{type}</p>
            <h3 className="mt-3 text-white text-6xl font-semibold">{value}<span className="text-xl ml-2">{unit}</span></h3>
            {windDirection && <WindDirection/>}
            {humidityPercent && <HumidityPercent percent={value}/>}
        </div>
    )
}