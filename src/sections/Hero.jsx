import moonIcon from '../assets/images/moon.svg';

const Hero = () => {
    return (
        <div className="h-[100dvh] bg-space-black w-full flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center relative">
                <div className="
                    absolute w-full h-[20%] bottom-0 left-0 z-10
                    bg-hero-mobile bg-top bg-cover bg-no-repeat
                    xs:h-[25%] sm:h-[30%] bg-orange-700
                ">
                    {/*Hero Background Image*/}
                </div>
                <div className="absolute top-[5%] left-[50%] translate-x-[-50%] z-10 w-[20%] xs:w-[17%] sm:w-[10%]">
                    <img 
                        src={moonIcon}
                        alt="icon of the moon"
                        className="w-[100%]"
                    />
                </div>
                <div className="
                    absolute w-full h-full top-0 left-0 z-0 
                    bg-starry-night bg-center bg-300% gb-no-repeat
                    animate-pan-bg
                    xs:bg-200%
                ">
                    {/*Hero Background Image*/}
                </div>

                {/* Page Content Below */}
                <div className="flex flex-col items-center justify-center text-text w-[80%] z-50">
                    <div className="font-black text-6xl mb-4">
                        <div>Moon</div>
                        <div>Phases</div>
                    </div>
                    <div className="text-gray-300 text-center">
                        The Moon has 8 phases, see which one is above you right now. 
                    </div>
                    <div className="w-full mt-4">
                        <input 
                            type="button"
                            value="See now"
                            className="
                                w-full text-black bg-white px-4 py-2 font-semibold
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;