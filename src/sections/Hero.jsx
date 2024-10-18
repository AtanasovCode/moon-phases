import { useMoonStore } from '../useMoonStore';
import moonIcon from '../assets/images/moon.svg';
import checkmarkIcon from '../assets/icons/checkmark.svg';

import { SpinnerGap, Check } from '@phosphor-icons/react';

const Hero = ({ getMoonPhase, }) => {

    const {
        hideText,
        toggleHideText,
    } = useMoonStore();

    const hideStyle = hideText ? "opacity-[0]" : "opacity-[1]";
    const hideCheckmark = hideText ? "opacity-100" : "opacity-0";

    return (
        <div className="h-[100dvh] bg-space-black w-full flex items-center justify-center relative">
            <div className="
                    absolute w-full h-full top-0 left-0 z-0 
                    bg-starry-night bg-center bg-300% gb-no-repeat
                    motion-safe:animate-pan-bg
                    xs:bg-300%
                    lg:bg-200%
                ">
                {/*Stars Background Image*/}
            </div>
            <div className="
                w-full h-full flex items-center justify-center relative
                sm:w-[80%] md:w-[60%] 
                lg:w-full lg:justify-start lg:px-12 lg:max-w-[1600px]
            ">
                <div className="
                    absolute w-full h-[20%] bottom-0 left-0 z-10
                    bg-hero-mobile bg-top bg-cover bg-no-repeat
                    xs:h-[25%] sm:h-[30%]
                    lg:bg-hero-desktop lg:h-full lg:w-full
                    xl:bg-hero-desktop-xl
                ">
                    {/*Hero Background Image*/}
                </div>
                <div className="absolute top-[5%] left-[50%] translate-x-[-50%] z-10 w-[20%] xs:w-[17%] sm:w-[10%] lg:hidden">
                    <img
                        src={moonIcon}
                        alt="icon of the moon"
                        className="w-[100%] lg:hidden"
                    />
                </div>

                {/* Page Content Below */}
                <div className={`
                    flex flex-col items-center justify-center text-text w-[80%] z-50
                    lg:w-[35%] lg:items-start 
                    ${hideStyle} transition-all duration-500 ease-in-out
                `}>
                    <div className="font-black text-6xl mb-4 lg:text-7xl">
                        <div>Moon</div>
                        <div>Phases</div>
                    </div>
                    <div className="text-gray-300 text-center lg:text-left lg:w-[70%] lg:text-lg">
                        The Moon has 8 phases, see which one is above you right now.
                    </div>
                    <div className="w-full mt-4 flex items-center justify-center lg:justify-start">
                        <input
                            type="button"
                            value="See now"
                            className="
                                w-[70%] text-text bg-space-black border-2 border-primary
                                px-4 py-3 font-semibold rounded-xl cursor-pointer 
                            "
                            onClick={() => getMoonPhase()}
                        />
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-[2%] left-[2%] z-20 flex items-center justify-center 
                cursor-pointer opacity-40 hover:opacity-100 transition-all duration-300 ease-in-out"
                onClick={() => toggleHideText()}
            >
                <div className={`
                            w-4 aspect-square bg-transparent relative 
                            border border-text border-solid
                        `}
                >
                    <div className={`
                        absolute top-0 left-0 w-full h-full bg-text ${hideCheckmark}
                        transition-all duration-300 ease-in-out flex items-center justify-center
                    `}>
                        <Check 
                            size="80%"
                            weight="regular"
                            color="#000"
                        />
                    </div>
                </div>
                <div className="text-text ml-2">
                    Hide text
                </div>
            </div>
        </div>
    );
}

export default Hero;