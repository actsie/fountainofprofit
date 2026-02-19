import CountUp from "@/components/count-number";

export default function StatsSection() {
    return (
        <section className="border-y border-[#edf9f8] py-10 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#edf9f8]">
                <div className="flex flex-col items-center gap-2 text-center py-6 md:py-0">
                    <h3 className="text-4xl font-semibold font-urbanist">
                        <CountUp from={0} to={50} duration={1.5} />%+
                    </h3>
                    <p className="text-gray-500">of most role tasks can be automated</p>
                </div>

                <div className="flex flex-col items-center gap-2 text-center py-6 md:py-0">
                    <h3 className="text-4xl font-semibold font-urbanist">
                        <CountUp from={0} to={30} duration={1.5} /> days
                    </h3>
                    <p className="text-gray-500">from first call to full handoff</p>
                </div>

                <div className="flex flex-col items-center gap-2 text-center py-6 md:py-0">
                    <h3 className="text-4xl font-semibold font-urbanist">
                        ~<CountUp from={0} to={3} duration={1.5} />x
                    </h3>
                    <p className="text-gray-500">cheaper than a full-time hire in the same period</p>
                </div>
            </div>
        </section>
    );
}
