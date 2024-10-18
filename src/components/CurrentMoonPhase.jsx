import { useMoonStore } from "../useMoonStore";
import { getMoonIconAndName } from "../Utils";

const CurrentMoonPhase = () => {

    const { moonPhase } = useMoonStore();

    const { name, icon, description } = getMoonIconAndName(moonPhase);

    return (
        <div className="w-full flex flex-col items-center justify-center md:flex-row">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex items-center justify-center 
                    w-[70%] 2xs:w-[60%] xs:w-[50%] sm:w-[45%] md:w-[80%] lg:w-[60%]">
                    <img
                        src={icon}
                        alt={`icon of the current moon phase ${name}`}
                        className="w-full"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
                <div className="text-3xl font-bold lg:font-5xl">
                    {name}
                </div>
                <div className="text-sm mt-2 w-[95%] xs:w-[70%] sm:w-[65%] lg:w-[70%] lg:text-base">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default CurrentMoonPhase;