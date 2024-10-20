import { useMoonStore } from "../useMoonStore";
import { getMoonIconAndName } from "../Utils";

const AllMoonPhases = () => {

    const { days } = useMoonStore();

    const tableHeadStyle = "p-2 font-semibold text-md lg:font-black lg:text-xl";
    const tableDataStyle = "py-4 px-2 md:px-4 lg:px-6 font-regular text-sm lg:text-base lg:py-8";

    return (
        <div className="w-full flex flex-col items-center justify-center text-text">
            <div className="font-bold text-3xl mb-12 text-center lg:text-4xl">
                Moon Phases Over The Following Weeks
            </div>
            <div className="w-full lg:w-[80%] xl:w-[70%]">
                <table className="w-full text-text table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className={`${tableHeadStyle}`}>Moon</th>
                            <th className={`${tableHeadStyle}`}>Date</th>
                            <th className={`${tableHeadStyle}`}>Visibility</th>
                            <th className={`${tableHeadStyle}`}>Phase</th>
                        </tr>
                    </thead>
                    <tbody className="space-y-4">
                        {
                            days.map((day) => {
                                const { date, icon, visible, name } = getMoonIconAndName(day.moonphase);
                                return (
                                    <tr key={day.datetime} className="text-center even:bg-[#19192e]">
                                        <td className={`mx-auto flex items-center justify-center ${tableDataStyle}`}>
                                            <img
                                                src={icon}
                                                alt={`moon phase ${name}`}
                                                className="w-8 lg:w-12"
                                            />
                                        </td>
                                        <td className={`${tableDataStyle}`}>
                                            {day.datetime}
                                        </td>
                                        <td className={`${tableDataStyle}`}>
                                            {visible}
                                        </td>
                                        <td className={`${tableDataStyle}`}>
                                            {name}
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllMoonPhases;