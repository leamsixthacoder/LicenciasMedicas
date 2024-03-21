
export const differenceInDays = (startDate: Date, endDate: Date): number => {
    const utcStartDate = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
    const utcEndDate = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())

    // Calculate the difference in milliseconds
    const diffMilliseconds = utcEndDate - utcStartDate;    // Convert milliseconds to days
    return Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
}