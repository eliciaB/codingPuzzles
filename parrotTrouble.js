function parrotTrouble(isTalking, hour) {
    // return isTalking && (hour<7 || hour>20)
    if (isTalking && (hour<7 || hour>20)) {
        return true
    } else {
        return false
    }
}

let result = parrotTrouble(true, 12)
console.log(result)