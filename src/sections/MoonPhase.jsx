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
            className="min-h-[100dvh] w-full bg-space-black text-text flex flex-col items-center justify-start pt-14 pb-6 px-2 lg:px-4 lg:pt-20 lg:pb-8"
        >
            <div className="flex flex-col items-center justify-center w-full sm:w-[85%] md:w-[95%] lg:max-w-[1440px]">
                <div className="w-full mb-24 lg:mb-44">
                    <CurrentMoonPhase />
                </div>
                <div className="w-full mb-24 lg:mb-44">
                    <NextMoonPhases />
                </div>
                <div className="w-full">
                    <AllMoonPhases />
                </div>import {useMoonStore} from "../useMoonStore";

                import CurrentMoonPhase from "../components/CurrentMoonPhase";
                import NextMoonPhases from "../components/NextMoonPhases";
                import AllMoonPhases from "../components/AllMoonPhases";

                const MoonPhase = ({moonRef, }) => {

    const {
                    moonPhase,
    } = useMoonStore();

                return (
                <div
                    ref={moonRef}
                    className="min-h-[100dvh] w-full bg-space-black text-text flex flex-col items-center justify-start pt-14 pb-6 px-2 lg:px-4 lg:pt-20 lg:pb-8"
                >
                    <div className="flex flex-col items-center justify-center w-full xs:w-[90%] sm:w-[85%] md:w-[95%] lg:max-w-[1440px]">
                        <div className="w-full mb-24 lg:mb-44">
                            <CurrentMoonPhase />
                        </div>
                        <div className="w-full mb-24 lg:mb-44">
                            <NextMoonPhases />
                        </div>
                        <div className="w-full">
                            <AllMoonPhases />
                        </div>
                    </div>
                </div>
                );
}

                export default MoonPhase;
            </div>
        </div>
    );
}

export default MoonPhase;