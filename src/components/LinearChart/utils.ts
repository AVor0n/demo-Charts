export function getTicks(
    min: number,
    max: number,
    step: number,
    minorTicks = 0,
) {
    const minStep = step / (minorTicks + 1);
    const countTicks = Math.floor((max - min) / minStep) + 1;
    return Array.from(Array(countTicks), (_it, i) => min + minStep * i);
}
