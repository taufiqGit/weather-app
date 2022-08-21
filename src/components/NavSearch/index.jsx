import { useDispatch } from "react-redux";
import { openPopupSearch } from "../../Features/ui";
import { fetchCurrentWeather } from "../../Features/weather";
import cord from "../../Util/DefaultCord";

export default function NavSearch(params) {
    const dispatch = useDispatch()

    const geolocSuccess =(position)=>{
        dispatch(fetchCurrentWeather(position.coords))
        dispatch(fetchForecast(position.coords))
    }

    const geolocError = (err)=>{
        toast.warn('Please allow your location !')
        dispatch(fetchCurrentWeather(cord))
        dispatch(fetchForecast(cord))
        console.warn('error get current location');
    }

    const handleRefreshCurrentLocation =()=>{
        console.log('jaja');
        navigator.geolocation.getCurrentPosition(geolocSuccess, geolocError);
    }

    return (
        <nav className="w-full flex justify-between items-center py-4 px-3">
            <button onClick={()=> dispatch(openPopupSearch())} className="bg-gray-1 py-2 px-4 text-white text-sm">Search for places</button>
            <button onClick={handleRefreshCurrentLocation} className="w-8 h-8 rounded-full bg-gray-1">
                <img className="w-5 mx-auto " src="/assets/location.svg" alt="" />
            </button>
        </nav>
    )
}