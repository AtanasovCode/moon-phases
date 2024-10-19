import { useMoonStore } from '../useMoonStore';
import moonIcon from '../assets/images/moon.svg';

import { SpinnerGap, Check } from '@phosphor-icons/react';

const Hero = ({ getMoonPhase, }) => {

    const {
        hideText,
        toggleHideText,
        loading,
        dataHasBeenFetched,
    } = useMoonStore();

    const hideStyle = hideText ? "opacity-[0]" : "opacity-[1]";
    const hideCheckmark = hideText ? "opacity-100" : "opacity-0";

    return (
        <div className="h-[100dvh] bg-space-black w-full flex items-center justify-center relative 
        bg-moon-background bg-cover bg-bottom bg-no-repeat">
            <div className="
                w-full h-full flex items-start justify-center relative py-16
                sm:w-[80%] md:w-[60%] lg:items-center
                lg:w-full lg:justify-start lg:px-12 lg:py-0 lg:max-w-[1600px]
            ">
                <div className={`
                    flex flex-col items-center justify-center text-text w-[80%] z-50
                    lg:w-[35%] lg:items-start 2xl:bg-black 2xl:bg-opacity-30 2xl:p-4
                `}>
                    <div className="font-black text-6xl mb-4 lg:text-7xl">
                        <div>Moon</div>
                        <div>Phases</div>
                    </div>
                    <div className="text-gray-300 text-center lg:text-left lg:w-[70%] lg:text-lg">
                        The Moon has 8 phases, see which one is above you right now.
                    </div>
                    <div className="w-full mt-4 flex items-center justify-center lg:justify-start">
                        <div className="
                            w-[90%] lg:w-[70%] text-text bg-transparent border-2 border-secondary relative
                            px-4 py-6 font-semibold rounded-xl flex items-center justify-center
                        ">
                            {
                                loading ?
                                    <div className="absolute w-full h-full flex items-center justify-center animate-spin">
                                        <SpinnerGap size="70%" weight="regular" color="#FFF" />
                                    </div>
                                    :
                                    <input
                                        type="button"
                                        value={dataHasBeenFetched ? "See below" : "See now"}
                                        className="absolute w-full h-full top-0 left-0 text-center cursor-pointer"
                                        onClick={() => !dataHasBeenFetched && getMoonPhase()}
                                    />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;