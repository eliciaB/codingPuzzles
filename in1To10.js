function oneToTen(n, outsideMode) {
    if (!outsideMode && n>=1 && n<=10 || outsideMode && n<=1 || outsideMode && n>=10) {
        return true
    } else {
       return false
    }
}

let result = oneToTen(10, true)
console.log(result)