import { useMoonStore } from "../useMoonStore";
import { MapPinArea, X, XCircle } from "@phosphor-icons/react";

const PopUp = () => {

    const { togglePopUp } = useMoonStore();

    return (
        <div className="
            bg-background text-text py-8 px-2 rounded-xl z-[9999]
            w-[90%] sm:w-[75%] md:w-[60%] lg:w-[35%] xl:w-[25%] max-w-[40rem] 
            flex flex-col items-center justify-center
            absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        ">
            <div 
                className="absolute top-[5%] right-[5%] cursor-pointer w-8"
                onClick={() => togglePopUp()}
            >
                <XCircle size="100%" weight="fill" color="#FFF" />
            </div>
            <div className="flex items-center justify-center w-12 md:w-16">
                <MapPinArea size="100%" weight="fill" color="#FFF" />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
                <div className="font-bold text-2xl mb-2 lg:text-3xl lg:mb-4">
                    Allow location?
                </div>
                <div className="w-[80%] text-md text-center lg:text-base">
                    Allow current location to see the current moon phase above you.
                </div>
            </div>
            <div className="flex items-center justify-center mt-4 lg:mt-6">
                <input
                    type="button"
                    value="See Moon Phase"
                    className="
                        px-6 py-2 text-text font-semibold text-center text-md 
                        rounded-xl bg-transparent border-2 border-primary
                    "
                />
            </div>
        </div>
    );
}

export default PopUp;