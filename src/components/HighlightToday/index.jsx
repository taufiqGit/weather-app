import ItemHighlightToday from "./ItemHighlightToday";

export default function HighlightToday(params) {
    return(
        <section className="w-full h-full px-6 py-4 lg:mx-auto lg:max-w-4xl lg:w-auto">
            <h2 className="text-white font-bold text-2xl mt-3">Today’s Hightlights</h2>
            <div className="w-full lg:mt-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                <ItemHighlightToday/>
                <ItemHighlightToday/>
                <ItemHighlightToday/>
                <ItemHighlightToday/>
            </div>
        </section>
    )
}