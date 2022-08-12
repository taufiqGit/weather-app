export default function DateNow(params) {
    const Month = ['Jan', 'Feb', 'Mar', 'Apr', 'Mey', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des']
    const Day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const d = new Date()

    return (
        <p className="text-sm mt-8 text-zinc-400">
            <span>Today</span>
            <span className="mx-2">-</span>
            <span>{Day[d.getDay() - 1]}, {d.getDate()} {Month[d.getMonth()]}</span>
        </p>       
    )
}