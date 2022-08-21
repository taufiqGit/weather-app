import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { selectPopupSearch } from "./Features/ui";
import { fetchCurrentWeather, fetchForecast } from "./Features/weather";
import cord from "./Util/DefaultCord";
import CurrentHighlight from "./components/CurrentHighlight";
import HighlightToday from "./components/HighlightToday";
import ModalSearch from "./components/NavSearch/ModalSearch";
import WeatherForecast from "./components/WeatherForecast";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    const dispatch = useDispatch()
    const popupSearch = useSelector(selectPopupSearch)
    const success =(position)=>{
        dispatch(fetchCurrentWeather(position.coords))
        dispatch(fetchForecast(position.coords))
    }

    const error = (err)=>{
        dispatch(fetchCurrentWeather(cord))
        dispatch(fetchForecast(cord))
        toast.warn('Please allow your location !')
        console.warn('error get current location');
    }

    useEffect(()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(success, error);
          } else {
            console.log("Not Available");
          }
    }, [])

    return (
        <>
            <div className="h-auto lg:h-screen lg:overflow-y-hidden w-full font-Raleway">
                { popupSearch && <ModalSearch /> }
                <div className="w-full h-full flex flex-col lg:flex-row">
                    <CurrentHighlight/>
                    <div className="lg:w-full bg-black-2 xl:px-28">
                        <WeatherForecast/>
                        <HighlightToday/>                     
                    </div>
                </div>
            </div>     
            <ToastContainer/>   
        </>
    )
}