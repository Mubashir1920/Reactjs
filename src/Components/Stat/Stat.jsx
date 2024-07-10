const Stat = () => {

    const stats = [
        {
            data: "2K",
            title: "Customers"
        },
        {
            data: "15+",
            title: "Services"
        },
        {
            data: "5+",
            title: "Locations"
        },
        {
            data: "95%",
            title: "Customer Satisfaction"
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <ul className="flex flex-col items-center justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
                    {
                        stats.map((item, idx) => (
                            <li key={idx} className="text-center">
                                <h4 className="text-4xl text-gray-800 font-semibold">{item.data}</h4>
                                <p className="mt-3 text-gray-600 font-medium">{item.title}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>

    )
}


export default Stat