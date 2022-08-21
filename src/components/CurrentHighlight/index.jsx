import NavSearch from "../NavSearch";
import ContentCurrentHighlight from "./ContentCurrentHighlight";


export default function CurrentHighlight() {
    return (
        <div className="w-full lg:min-w-[320px] lg:w-auto h-[790px] lg:h-full backdrop-opacity-50 bg-black-1 relative overflow-x-hidden">
            <img src="/assets/Cloud-background.png" className="opacity-10 w-[150%] absolute top-16 -left-[25%] max-w-none" alt="asf" />
            <NavSearch/>
            <ContentCurrentHighlight/>
        </div>
    )
}