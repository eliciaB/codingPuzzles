function stringTimes(inputString, n) {
    let newString = "" 
    for (let i = 0; i < n; i++) {
        // console.log(inputString)
        newString = newString + inputString
    }
    return newString
}

let result = stringTimes('Hi', 4)
console.log(result)