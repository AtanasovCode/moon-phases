import moonIcon from '../assets/images/moon.svg';

const Hero = () => {
    return (
        <div className="h-[100dvh] bg-space-black w-full flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center relative">
                <div className="
                    absolute w-full h-[20%] bottom-0 left-0 z-[1]
                    bg-hero-mobile bg-top bg-cover bg-no-repeat
                    xs:h-[25%] sm:h-[30%]
                ">
                    {/*Hero Background Image*/}
                </div>
                <div className="absolute top-[5%] left-[50%] translate-x-[-50%] z-[2] w-[20%] xs:w-[17%] sm:w-[10%]">
                    <img 
                        src={moonIcon}
                        alt="icon of the moon"
                        className="w-[100%]"
                    />
                </div>
                <div className="
                    absolute w-full h-full top-0 left-0 z-[-1]
                    bg-starry-night bg-center bg-300% bg-no-repeat
                ">
                    {/*Hero Background Image*/}
                </div>
            </div>
        </div>
    );
}

export default Hero;