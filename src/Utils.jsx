import { format, parseISO } from 'date-fns';
// Importing moon phases images
import fullMoon from './assets/phases/full-moon.svg';
import newMoon from './assets/phases/new-moon.svg';
import firstQuarter from './assets/phases/first-quarter.svg';
import waxingGibbous from './assets/phases/waxing-gibbous.svg';
import waxingCrescent from './assets/phases/waxing-crescent.svg';
import waningGibbous from './assets/phases/waning-gibbous.svg';
import waningCrescent from './assets/phases/waning-crescent.svg';

export const getMoonIconAndName = (moonPhase) => {

    if (moonPhase === 0) {
        return {
            icon: newMoon,
            name: 'New Moon',
            description: 'This is when you can’t see the Moon easily at all, because the part that is illuminated by the Sun is on the side of the Moon pointing away from Earth. This phase happens when the Moon is between the Sun and Earth. ',
        };
    } else if (moonPhase > 0 && moonPhase < 0.25) {
        return {
            icon: waxingCrescent,
            name: 'Waxing Crescent',
            description: 'As it moves in its orbit, a small sliver of the Moon becomes visible. It takes a crescent shape because of the Moon’s roundness; we only see the edge of the part that’s illuminated by the Sun, and that edge is on a round object so it appears curved.',
        };
    } else if (moonPhase === 0.25) {
        return {
            icon: firstQuarter,
            name: 'First Quarter',
            description: 'This is when half of the Moon’s illuminated surface is visible from Earth. This is the equivalent of saying we are seeing one-quarter of the total Moon’s surface illuminated, hence the rather confusing name.',
        };
    } else if (moonPhase > 0.25 && moonPhase < 0.5) {
        return {
            icon: waxingGibbous,
            name: 'Waxing Gibbous',
            description: 'When more than half of the Moon’s surface visible from Earth is illuminated, we call it a Gibbous Moon.',
        };
    } else if (moonPhase === 0.5) {
        return {
            icon: fullMoon,
            name: 'Full Moon',
            description: "When the Moon is on the opposite side of the Earth from the Sun, we see the entire near-side of the Moon illuminated. For the same reason we don’t have solar eclipses with every new Moon, we don’t get lunar eclipses with every full Moon. The Moon's orbit around the Earth is tilted by about five degrees, meaning sometimes it’s below our shadow and sometimes it’s above it.",
        };
    } else if (moonPhase > 0.5 && moonPhase < 0.75) {
        return {
            icon: waningGibbous,
            name: 'Waning Gibbous',
            description: 'After the full Moon, the illuminated portion of the Moon visible from Earth begins to wane, or decrease in size. During the waning gibbous phase, the Moon’s surface visible from Earth is still mostly illuminated.',
        };
    } else if (moonPhase === 0.75) {
        return {
            icon: firstQuarter,
            name: 'Third Quarter',
            description: 'This is when half of the Moon’s illuminated surface is visible from Earth. The illuminated part is the half of the near side of the Moon that was not illuminated at first quarter.',
        };
    } else if (moonPhase > 0.75 && moonPhase <= 1) {
        return {
            icon: waningCrescent,
            name: 'Waning Crescent',
            description: 'The final phase of the Moon is the waning crescent, which happens when only a small sliver of the Moon is visible (on the far side of the Moon’s visible surface, compared to the waxing crescent) before it disappears into the new Moon phase once again.',
        };
    }
};


export const getNextMoonPhases = (days) => {
    const seenPhases = new Set();
    const result = [];

    days.forEach((day) => {
        const { moonphase } = day;
        const { name, icon, description } = getMoonIconAndName(moonphase);

        if (!seenPhases.has(name)) {
            result.push({
                date: day.datetime,
                moonphase: name,
                icon,
                description,
            });
            seenPhases.add(name);
        }
    });

    return result;
};

export const formatDateToDay = (date) => {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    return format(parsedDate, "EEE, d");
}


