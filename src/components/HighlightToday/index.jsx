import ItemHighlightToday from "./ItemHighlightToday";

export default function HighlightToday(params) {
    return(
        <section className="w-full bg-black-2 px-6 py-4">
            <h2 className="text-white font-bold text-2xl mt-3">Today’s Hightlights</h2>
            <div>
                <ItemHighlightToday/>
                <ItemHighlightToday/>
                <ItemHighlightToday/>
                <ItemHighlightToday/>
            </div>
        </section>
    )
}