import { useMoonStore } from "../useMoonStore";
import { getMoonIconAndName } from "../Utils";

const MoonPhase = ({ moonRef, }) => {

    const {
        moonPhase,
    } = useMoonStore();

    const { icon, name, description } = getMoonIconAndName();

    return (
        <div
            ref={moonRef}
            className="min-h-[100dvh] w-full bg-background text-text flex flex-col items-center justify-start py-14 px-2"
        >
            <div className="w-full flex flex-col items-center justify-center">
                <div className="
                flex flex-col items-center justify-start w-full
            ">
                    <div className="flex items-center justify-center w-[70%] xs:w-[55%] sm:w-[45%]">
                        <img
                            src={icon}
                            alt={`icon of the current moon phase ${name}`}
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-4">
                    <div className="text-3xl font-bold">
                        {name}
                    </div>
                    <div className="text-sm mt-2 w-[95%]">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoonPhase;