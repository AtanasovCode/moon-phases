import { useMoonStore } from "../useMoonStore";

import MoonItem from "./MoonItem";

const AllMoonPhases = () => {

    const { days } = useMoonStore();

    return (
        <div className="mt-24 w-full flex flex-col items-center justify-center text-text">
            <div className="font-bold text-3xl mb-12 text-center lg:text-4xl">
                Moon Phases Over The Following Weeks
            </div>
            <div className="w-full grid grid-cols-1 gap-3 md:w-[75%] lg:w-full lg:grid-cols-2 lg:gap-5">
                {days.map((day, index) => {
                   while(index < 14) return <MoonItem key={day.datetime} date={day.datetime} moonPhase={day.moonphase} />
                })}
            </div>
        </div>
    );
}

export default AllMoonPhases;