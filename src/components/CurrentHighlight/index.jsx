import NavSearch from "../NavSearch";


export default function CurrentHighlight() {
    return (
        <div className="w-full lg:min-w-[320px] md:w-auto h-[790px] md:h-full backdrop-opacity-50 bg-black-1 relative overflow-x-hidden">
            <img src="/assets/Cloud-background.png" className="opacity-10 w-[150%] absolute top-16 -left-[25%] max-w-none" alt="asf" />
            <NavSearch/>
            <div className="w-full flex flex-col items-center">
                <img className="w-40 mt-20" src="/assets/Shower.png" alt="anjing" />
                <h2 className="text-9xl text-white mt-2">15<span className="text-3xl text-zinc-400">℃</span></h2>
                <p className="text-3xl text-zinc-400 mt-8 font-semibold">Shower</p>
                <p className="text-sm mt-8 text-zinc-400">
                    <span>Today</span>
                    <span className="mx-2">-</span>
                    <span>Fri, 6 Jun</span>
                </p>
                <div className="flex mt-8">
                    <img className="w-5" src="/assets/location-city.svg" alt="location" />
                    <span className="text-zinc-400 ml-1">Mranggen</span>
                </div>
            </div>
        </div>
    )
}