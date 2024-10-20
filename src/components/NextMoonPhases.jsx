import { useEffect } from "react";
import { useMoonStore } from "../useMoonStore";
import { formatDateToDay, getMoonIconAndName, getNextMoonPhases } from "../Utils";

import Phase from "./Phase";

const NextMoonPhases = () => {

    const { days } = useMoonStore();

    return (
        <div className="flex flex-col w-full items-center justify-center">
            <div className="text-3xl font-bold mb-12 text-center lg:text-4xl">
                Next Moon Phases
            </div>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {
                    getNextMoonPhases(days).map((day, index) => {
                        if (index > 0 && index < 5) return <Phase
                            key={day.date}
                            moonPhase={day.moonphase}
                            icon={day.icon}
                            date={day.date}
                            description={day.description}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default NextMoonPhases;