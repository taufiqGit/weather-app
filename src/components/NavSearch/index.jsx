import ModalSearch from "./ModalSearch";


export default function NavSearch(params) {
    return (
        <>
        <nav className="w-full flex justify-between items-center py-4 px-3">
            <button className="bg-gray-1 py-2 px-4 text-white text-sm">Search for places</button>
            <button className="w-8 h-8 rounded-full bg-gray-1">
                <img className="w-5 mx-auto " src="/assets/location.svg" alt="" />
            </button>
            {/* <ModalSearch/> */}
        </nav>
            
        </>
    )
}