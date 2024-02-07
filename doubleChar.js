function doubleChar(inputString) {
    let newString = ""
    for (i = 0; i<inputString.length; i++) {
        newString = newString + inputString[i] + inputString[i]
        console.log(newString)
    }
    return newString
}

let result = doubleChar("The")
console.log(result)
