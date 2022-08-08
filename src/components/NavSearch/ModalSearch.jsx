export default function ModalSearch(params) {
    return (
        <div className="fixed overflow-hidden bg-black-1 top-0 left-0 right-0 bottom-0 z-30 w-full h-full">
            <div className="w-full flex p-2 justify-end">
                <button>
                    <img className="w-10" src="/assets/close.svg" alt="close" />
                </button>
            </div>
            <div className="w-full px-2 flex gap-x-1 mt-2.5 h-12 relative">
                <img className="absolute w-5 left-4 top-3" src="/assets/Search.svg" alt="asd" />
                <input type="text" className="h-full text-sm pl-9 pr-2 flex-1 bg-black-1 border text-white font-semibold focus:outline-none" placeholder="search location" />
                <button className="bg-blue-1 h-full w-24 font-semibold text-white">Search</button>
            </div>
            <div className="w-full px-2 py-3">
                <button className="w-full h-14 my-3 flex justify-between items-center px-2 border-tranparent hover:border hover:border-white">
                    <span className="text-white text-lg">London</span>
                    <img className="w-5" src="/assets/ChevronRight.svg" alt="" />
                </button>
                <button className="w-full h-14 my-3 flex justify-between items-center px-2 border-tranparent hover:border hover:border-white">
                    <span className="text-white text-lg">London</span>
                    <img className="w-5" src="/assets/ChevronRight.svg" alt="" />
                </button>
                <button className="w-full h-14 my-3 flex justify-between items-center px-2 border-tranparent hover:border hover:border-white">
                    <span className="text-white text-lg">London</span>
                    <img className="w-5" src="/assets/ChevronRight.svg" alt="" />
                </button>
                <button className="w-full h-14 my-3 flex justify-between items-center px-2 border-tranparent hover:border hover:border-white">
                    <span className="text-white text-lg">London</span>
                    <img className="w-5" src="/assets/ChevronRight.svg" alt="" />
                </button>
            </div>
        </div>
    )
}