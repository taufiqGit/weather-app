
export default function BtnSetScaleTemp({ children, isTempActive }){
    let classNameBtn 
    if (isTempActive) {
        
    } else {

    }
    return (
        <button className="w-9 h-9 bg-white rounded-full ml-2">
            { children }
        </button>
    )
}