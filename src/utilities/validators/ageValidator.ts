export const ageValidator = (minAge:number,maxAge:number) => (value: number) => {
    if (value >= minAge && value <= maxAge) {
        return undefined
    } else {
        return "Age is not in range should be between 18 and 100"
    }
}