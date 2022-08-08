import CurrentHighlight from "./components/CurrentHighlight";
import HighlightToday from "./components/HighlightToday";
import ModalSearch from "./components/NavSearch/ModalSearch";
import WeatherForecast from "./components/WeatherForecast";

export default function App(params) {
    return (
        <div className="h-auto lg:h-screen w-full font-Raleway">
            <ModalSearch/>
            <div className="w-full flex flex-col lg:flex-row">
                <CurrentHighlight/>
                <div className="lg:w-full">
                    <WeatherForecast/>
                    <HighlightToday/>                     
                </div>
            </div>
        </div>
    )
}