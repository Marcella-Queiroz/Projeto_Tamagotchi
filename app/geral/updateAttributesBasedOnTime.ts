export function updateAttributesBasedOnTime(lastUpdated: number, hunger: number, sleep: number, happy: number): { hunger: number; sleep: number; happy: number } {
    const currentTime = Math.floor(Date.now() / 3600000);
    const timeDiff = currentTime - lastUpdated;

    const decayAmount = timeDiff * 50;

    return {
        hunger: Math.max(0, hunger - decayAmount),
        sleep: Math.max(0, sleep - decayAmount),
        happy: Math.max(0, happy - decayAmount),
    };
}
