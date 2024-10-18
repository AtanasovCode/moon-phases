import { useMoonStore } from "./useMoonStore";

// Importing moon phases images
import fullMoon from './assets/phases/full-moon.svg';
import newMoon from './assets/phases/new-moon.svg';
import firstQuarter from './assets/phases/first-quarter.svg';
import waxingGibbous from './assets/phases/waxing-gibbous.svg';
import waxingCrescent from './assets/phases/waxing-crescent.svg';
import waningGibbous from './assets/phases/waning-gibbous.svg';
import waningCrescent from './assets/phases/waning-crescent.svg';

export const getMoonIconAndName = () => {
    const { moonPhase } = useMoonStore();

    if (moonPhase === 0) {
        return { icon: newMoon, name: 'New Moon' };
    } else if (moonPhase > 0 && moonPhase < 0.25) {
        return { icon: waxingCrescent, name: 'Waxing Crescent' };
    } else if (moonPhase === 0.25) {
        return { icon: firstQuarter, name: 'First Quarter' };
    } else if (moonPhase > 0.25 && moonPhase < 0.5) {
        return { icon: waxingGibbous, name: 'Waxing Gibbous' };
    } else if (moonPhase === 0.5) {
        return { icon: fullMoon, name: 'Full Moon' };
    } else if (moonPhase > 0.5 && moonPhase < 0.75) {
        return { icon: waningGibbous, name: 'Waning Gibbous' };
    } else if (moonPhase === 0.75) {
        return { icon: firstQuarter, name: 'Last Quarter' }; // Reusing firstQuarter image
    } else if (moonPhase > 0.75 && moonPhase <= 1) {
        return { icon: waningCrescent, name: 'Waning Crescent' };
    }
};
