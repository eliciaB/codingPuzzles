function squirrelPlay(temp, isSummer) {
    if (temp>=60 && temp<=100 && isSummer) {
        return true
    } else {
        if (temp>=60 && temp<=90 && !isSummer) {
            return true
        }
    }
    return false
}

let result = squirrelPlay(95, true)
console.log(result)