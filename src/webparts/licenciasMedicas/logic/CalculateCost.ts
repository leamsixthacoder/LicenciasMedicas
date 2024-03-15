
export const calculateCost = (totalDays: number | null, salary: number | undefined, tssRefound: number | null,) => {
    const newTotalDays = totalDays ? totalDays : 0
    const newtssRefound = tssRefound ? tssRefound : 0
    const newSalary = salary ? salary : 0
    const WORKING_DAYS = 23.83
    const leaveCost = (newSalary / WORKING_DAYS) * newTotalDays - newtssRefound
    const updatedLeaveCost = parseFloat(leaveCost.toFixed(2))
    return updatedLeaveCost
}