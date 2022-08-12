import { useSelector } from "react-redux";
import { selectWeather } from "../../Features/weather";
import NavSearch from "../NavSearch";
import ContentCurrentHighlight from "./ContentCurrentHighlight";
import DateNow from "./DateNow";


export default function CurrentHighlight() {
    return (
        <div className="w-full lg:min-w-[320px] md:w-auto h-[790px] md:h-full backdrop-opacity-50 bg-black-1 relative overflow-x-hidden">
            <img src="/assets/Cloud-background.png" className="opacity-10 w-[150%] absolute top-16 -left-[25%] max-w-none" alt="asf" />
            <NavSearch/>
            <ContentCurrentHighlight/>
        </div>
    )
}