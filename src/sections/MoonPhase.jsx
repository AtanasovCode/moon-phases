import { useMoonStore } from "../useMoonStore";
import { getMoonIconAndName } from "../Utils";

const MoonPhase = ({ moonRef, }) => {

    const {
        moonPhase,
    } = useMoonStore();

    const { icon, name } = getMoonIconAndName();

    return (
        <div
            ref={moonRef}
            className="min-h-[100dvh] w-full bg-background flex flex-col items-center justify-center"
        >
            <img
                src={icon}
                alt={`icon of the current moon phase ${name}`}
                className="w-32"
            />
        </div>
    );
}

export default MoonPhase;