import { useMoonStore } from "../useMoonStore";

import CurrentMoonPhase from "../components/CurrentMoonPhase";
import NextMoonPhases from "../components/NextMoonPhases";
import AllMoonPhases from "../components/AllMoonPhases";

const MoonPhase = ({ moonRef, }) => {

    const {
        moonPhase,
    } = useMoonStore();

    return (
        <div
            ref={moonRef}
            className="min-h-[100dvh] w-full bg-space-black text-text flex flex-col items-center justify-start py-14 px-2 lg:px-4 lg:py-20"
        >
            <div className="flex flex-col items-center justify-center w-full xs:w-[90%] sm:w-[70%] md:w-[95%] lg:max-w-[1440px]">
                <CurrentMoonPhase />
                <NextMoonPhases />
                <AllMoonPhases />
            </div>
        </div>
    );
}

export default MoonPhase;