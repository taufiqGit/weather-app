import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentHighlight from "./components/CurrentHighlight";
import HighlightToday from "./components/HighlightToday";
import ModalSearch from "./components/NavSearch/ModalSearch";
import WeatherForecast from "./components/WeatherForecast";
import { selectPopupSearch } from "./Features/ui";
import { fetchCurrentWeather } from "./Features/weather";

export default function App() {
    const dispatch = useDispatch()
    const popupSearch = useSelector(selectPopupSearch)
    const cord = {
        latitude: '-21.757383377762842',
        longitude: '117.49811793521812'
    }
    
    const success =(position)=>{
        dispatch(fetchCurrentWeather(position.coords))
        console.log(position.coords);
    }

    const error = (err)=>{
        dispatch(fetchCurrentWeather(cord))
        console.log('error...');
    }

    useEffect(()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(success, error);
          } else {
            console.log("Not Available");
          }
    }, [])

    return (
        <div className="h-auto lg:h-screen lg:overflow-y-hidden w-full font-Raleway">
            {/* { popupSearch && <ModalSearch/> } */}
            <div className="w-full h-full flex flex-col lg:flex-row">
                <CurrentHighlight/>
                <div className="lg:w-full bg-black-2 xl:px-28">
                    <WeatherForecast/>
                    <HighlightToday/>                     
                </div>
            </div>
        </div>
    )
}