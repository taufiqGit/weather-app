import axios from "axios";
import { useEffect } from "react";
import CurrentHighlight from "./components/CurrentHighlight";
import HighlightToday from "./components/HighlightToday";
import ModalSearch from "./components/NavSearch/ModalSearch";
import WeatherForecast from "./components/WeatherForecast";

export default function App() {
    const getWeather = async()=>{
        try {
          const Req = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=-6.892161&lon=110.63775&appid=c07467bd8aeb3a9268f86996ec40c2c6')
          console.log(Req.data);
        } catch (error) {
          console.log(error);
        }
      }
    useEffect(()=>{
        
    }, [])
    
    return (
        <div className="h-auto lg:h-screen lg:overflow-y-hidden w-full font-Raleway">
            {/* <ModalSearch/> */}
            <div className="w-full h-full flex flex-col lg:flex-row">
                <CurrentHighlight/>
                <div className="lg:w-full bg-black-2">
                    <WeatherForecast/>
                    <HighlightToday/>                     
                </div>
            </div>
        </div>
    )
}