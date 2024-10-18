import { useMoonStore } from "../useMoonStore";
import { getMoonIconAndName } from "../Utils";

import starryBackground from '../assets/images/starts-bg.svg';

const CurrentMoonPhase = () => {

    const { moonPhase } = useMoonStore();

    const { name, icon, description } = getMoonIconAndName(moonPhase);

    return (
        <div className="w-full flex flex-col items-center justify-center md:flex-row">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex items-center justify-center border-2
                border-secondary bg-background p-8 rounded-xl relative
                    w-[80%] 2xs:w-[70%] xs:w-[60%] sm:w-[55%] md:w-[95%] lg:w-[75%]">
                    <img
                        src={icon}
                        alt={`icon of the current moon phase ${name}`}
                        className="w-full z-90"
                    />
                    <div className="absolute w-full h-full bg-starry-night bg-cover bg-center bg-no-repeat z-10"></div>
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