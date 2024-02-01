function diff21(n) {

    let returnVal
    if (n>21) {
        returnVal = (21-n)*2
    } else {
        returnVal = n-21
    }

    if (returnVal < 0) {
        returnVal = -returnVal
    }
    return returnVal
}
let answer = diff21(24)
console.log(answer)