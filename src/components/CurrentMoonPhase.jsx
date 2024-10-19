import { useMoonStore } from "../useMoonStore";
import { getMoonIconAndName } from "../Utils";
import { LinkSimple } from "@phosphor-icons/react";


const CurrentMoonPhase = () => {

    const { moonPhase, moonPhasesInfoSource } = useMoonStore();

    const { name, icon, description } = getMoonIconAndName(moonPhase);

    return (
        <div className="w-full flex flex-col items-center justify-center md:flex-row">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex items-center justify-center
                p-14 rounded-xl relative overflow-hidden border-2 border-secondary
                    w-[95%] 2xs:w-[75%] xs:w-[65%] sm:w-[60%] md:w-[95%] lg:w-[80%]">
                    <img
                        src={icon}
                        alt={`icon of the current moon phase ${name}`}
                        className="w-full z-[9999]"
                    />
                    <div className="absolute w-full h-full bg-stars bg-cover bg-center bg-no-repeat z-10"></div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
                <div className="text-3xl mb-2 font-bold lg:font-black lg:text-5xl lg:mb-6">
                    {name}
                </div>
                <div className="text-sm w-[95%] xs:w-[70%] sm:w-[65%] lg:w-[70%] lg:text-base">
                    {description}
                    <a
                        href={moonPhasesInfoSource}
                        target="_blank"
                        className="flex items-center justify-start mt-2 w-full opacity-60"
                    >
                        <div className="flex items-center justify-center mr-1">
                            <LinkSimple size="16" weight="regular" color="#FFF" />
                        </div>
                        <div className="text-sm">
                            Source
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CurrentMoonPhase;