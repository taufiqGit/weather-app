
export default function ItemHighlightToday() {
    return (
        <div className="w-full my-4 lg:my-0 flex flex-col items-center py-3 bg-black-1">
            <p className="text-white ">Wind status</p>
            <h3 className="mt-3 text-white text-6xl font-semibold">7<span className="text-xl">mph</span></h3>
            <div className="flex items-center mt-6">
                <div className="w-5 h-5 flex justify-center items-center rounded-full bg-gray-1">
                    <img className="w-3 rotate-180" src="/assets/cursor.svg" alt="img" />
                </div>
                <span className="text-[13px] ml-2 text-white">WSW</span>
            </div>
        </div>
    )
}