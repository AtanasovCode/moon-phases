import { getMoonIconAndName, formatDateToDay } from "../Utils";

const MoonItem = ({ date, moonPhase }) => {

    const { name, icon } = getMoonIconAndName(moonPhase);

    return (
        <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-secondary">
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center mr-4">
                    <img
                        src={icon}
                        alt={`moon phase ${name}`}
                        className="w-8 lg:w-10"
                    />
                </div>
                <div className="mr-4 text-sm lg:text-md">
                    {date}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="text-sm mr-2 lg:text-md">
                    Phase
                </div>
                <div className="text-md font-semibold lg:text-lg">
                    {name}
                </div>
            </div>
        </div>
    );
}

export default MoonItem;