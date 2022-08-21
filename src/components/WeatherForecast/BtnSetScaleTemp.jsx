
export default function BtnSetScaleTemp({ children, isUnitActive, click }){
    return (
        <button 
            onClick={click}
            className={`w-9 h-9 rounded-full ml-2 ${isUnitActive ? 'bg-white text-[#110E3C]' : 'bg-[#585676] text-white'}`}>
            { children }
        </button>
    )
}