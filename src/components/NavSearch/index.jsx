import { useDispatch, useSelector } from "react-redux";
import { closePopupSearch, openPopupSearch, selectPopupSearch } from "../../Features/ui";
import { fetchCurrentWeather } from "../../Features/weather";
import ModalSearch from "./ModalSearch";


export default function NavSearch(params) {
    const dispatch = useDispatch()
    const popupSearch = useSelector(selectPopupSearch)

    const handleRefreshCurrentLocation =()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            dispatch(fetchCurrentWeather(position.coords))
        }, ()=>{
            console.log('ss');
        });
    }

    const handleToggleModalSearch =()=>{
        console.log(popupSearch);
        if (popupSearch) {
            dispatch(closePopupSearch())
        } else{
            dispatch(openPopupSearch())
        }
    }

    return (
        <nav className="w-full flex justify-between items-center py-4 px-3">
            <button onClick={handleToggleModalSearch} className="bg-gray-1 py-2 px-4 text-white text-sm">Search for places</button>
            <button onClick={handleRefreshCurrentLocation} className="w-8 h-8 rounded-full bg-gray-1">
                <img className="w-5 mx-auto " src="/assets/location.svg" alt="" />
            </button>
            {popupSearch ? (<ModalSearch/>) : ''}
        </nav>
    )
}