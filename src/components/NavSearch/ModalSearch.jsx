import { useRef } from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closePopupSearch } from "../../Features/ui"
import { fetchCurrentWeather, fetchForecast, fetchSearch, selectListRegion } from "../../Features/weather"

export default function ModalSearch(params) {
    const [search, setSearch] = useState('')
    const inputSearch = useRef(null)
    const listRegion = useSelector(selectListRegion)
    const dispatch = useDispatch()

    const handleSearch = ()=>{
        if (search) {
            dispatch(fetchSearch({q: search}))
        }
    }

    const handleGetWeatherBySearch = ({ lat, lon })=>{
        const payload = {
            latitude: lat,
            longitude: lon
        }
        dispatch(fetchCurrentWeather(payload))
        dispatch(fetchForecast(payload))
        dispatch(closePopupSearch())
    }

    useEffect(()=>{
        inputSearch.current.focus()
    }, [])

    return (
        <div className="fixed overflow-hidden bg-black-1 top-0 left-0 bottom-0 z-30 w-full h-full lg:min-w-[320px] lg:w-auto">
            <div className="w-full flex p-2 justify-end">
                <button onClick={()=> dispatch(closePopupSearch())}>
                    <img className="w-10" src="/assets/close.svg" alt="close" />
                </button>
            </div>
            <div className="w-full px-2 flex gap-x-1 mt-2.5 h-12 relative">
                <img className="absolute w-4 left-5 top-4" src="/assets/Search.svg" alt="asd" />
                <input type="text" 
                    ref={inputSearch}
                    onChange={(e) => setSearch(e.target.value)} 
                    className="h-full text-[15px] pl-9 pr-2 flex-1 bg-black-1 border text-white focus:outline-none" 
                    placeholder="Search Location" />
                <button onClick={handleSearch} className="bg-blue-1 h-full w-24 font-semibold text-white">Search</button>
            </div>
            <div className="w-full px-2 py-3">
                {
                   listRegion[0] === 'Not Found !!' ? 
                        <h2 className="text-white text-lg font-semibold mt-4 text-center">{listRegion[0]}</h2> : 
                        listRegion.length > 0 ? listRegion.map(city => {
                            let cityState = `${city?.state ? `, ${city?.state}` : ''}`
                            let cityName = `${city?.name}${cityState}${`, ${city?.country}`}`
                            return (
                                <button 
                                    key={city.lat + city.lon}
                                    onClick={()=> handleGetWeatherBySearch(city)}
                                    className="w-full h-14 my-3 flex justify-between items-center px-2 border-tranparent hover:border hover:border-white">
                                    <span className="text-white text-lg">{cityName.substring(0, 32)}</span>
                                    <img className="w-5" src="/assets/ChevronRight.svg" alt="" />
                                </button>                            
                            )
                    }) : ''
                }
            </div>
        </div>
    )
}