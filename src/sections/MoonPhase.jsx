import { useMoonStore } from "../useMoonStore";
import { getMoonIconAndName } from "../Utils";

import CurrentMoonPhase from "../components/CurrentMoonPhase";

const MoonPhase = ({ moonRef, }) => {

    const {
        moonPhase,
    } = useMoonStore();

    return (
        <div
            ref={moonRef}
            className="min-h-[100dvh] w-full bg-background text-text flex flex-col items-center justify-start py-14 px-2 lg:px-4 lg:py-20"
        >
            <div className="flex flex-col items-center justify-center w-full xs:w-[95%] sm:w-[80%] md:w-[95%] lg:max-w-[1440px]">
                <CurrentMoonPhase />
            </div>
        </div>
    );
}

export default MoonPhase;