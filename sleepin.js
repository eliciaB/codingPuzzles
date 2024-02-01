function sleepIn(weekday, vacation){
    if (!weekday||vacation) {
        return true
    } else{
        return false
    }
}

let weekday = false
let vacation = true
let shouldSleepIn = sleepIn(weekday, vacation)

console.log(shouldSleepIn)