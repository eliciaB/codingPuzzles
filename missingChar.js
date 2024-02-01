function missingChar(inputString, n) {
    let newString = ""
    for (let i = 0; i < inputString.length; i++) {
        if (i!==n) {
            console.log(inputString)
            newString = newString+inputString[i]
        }
    }
    return newString
}

let result = missingChar("apple", 3)
console.log(result)