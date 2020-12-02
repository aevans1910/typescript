function isLeapYear(year: number) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return true
        }
    }

}

export default isLeapYear