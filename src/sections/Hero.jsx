import moonIcon from '../assets/images/moon.svg';

const Hero = () => {
    return (
        <div className="h-[100dvh] bg-space-black w-full flex items-center justify-center relative">
            <div className="
                    absolute w-full h-full top-0 left-0 z-0 
                    bg-starry-night bg-center bg-300% gb-no-repeat
                    animate-pan-bg
                    xs:bg-200%
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
                <div className="
                    flex flex-col items-center justify-center text-text w-[80%] z-50
                    lg:w-[35%] lg:items-start
                ">
                    <div className="font-black text-6xl mb-4 lg:text-7xl">
                        <div>Moon</div>
                        <div>Phases</div>
                    </div>
                    <div className="text-gray-300 text-center lg:text-left">
                        The Moon has 8 phases, see which one is above you right now.
                    </div>
                    <div className="w-full mt-4 flex items-center justify-center lg:justify-start">
                        <input
                            type="button"
                            value="See now"
                            className="
                                w-[70%] text-black bg-white px-4 py-2 font-semibold
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;