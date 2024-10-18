import { formatDateToDay } from "../Utils";

const Phase = ({
    moonPhase,
    icon,
    date,
    description,
}) => {

    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-xl border-2 bg-background border-secondary text-text">
            <div className="text-xl font-semibold mb-4 text-center w-full">
                {formatDateToDay(date)}
            </div>
            <div className="flex items-center justify-center mb-4 w-[45%] xs:w-[35%] sm:w-[30%]">
                <img src={icon} alt={`moon phase ${name}`} className="w-full" />
            </div>
            <div className="text-2xl font-semibold">
                {moonPhase}
            </div>
            <div className="text-sm w-[95%] text-left mt-2">
                {description}
            </div>
        </div>
    );
}

export default Phase;