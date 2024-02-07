function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile || aSmile == false && bSmile == false)
}

let result = monkeyTrouble(false, false)
console.log(result)