import { getMoonIconAndName, formatDateToDay } from "../Utils";

const MoonItem = ({ date, moonPhase }) => {

    const { name, icon } = getMoonIconAndName(moonPhase);

    return (
        <div className="flex items-center justify-between bg-background px-4 py-3 rounded-xl border-2 border-secondary">
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center mr-4">
                    <img
                        src={icon}
                        alt={`moon phase ${name}`}
                        className="w-8 lg:w-12"
                    />
                </div>
                <div className="mr-4 lg:text-md">
                    {formatDateToDay(date)}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="text-md mr-2">
                    Phase
                </div>
                <div className="text-lg font-semibold">
                    {name}
                </div>
            </div>
        </div>
    );
}

export default MoonItem;