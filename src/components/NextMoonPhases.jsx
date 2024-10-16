import { useEffect } from "react";
import { useMoonStore } from "../useMoonStore";
import { getMoonIconAndName, getNextMoonPhases } from "../Utils";

import Phase from "./Phase";

const NextMoonPhases = () => {

    const { days } = useMoonStore();

    useEffect(() => {
        console.log(getNextMoonPhases(days));
    }, [])

    return (
        <div className="flex flex-col w-full items-center justify-center mt-24">
            <div className="text-3xl font-bold mb-6 text-center">
                Next new moon phases
            </div>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {
                    getNextMoonPhases(days).map((day, index) => {
                        if (index < 4) return <Phase
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