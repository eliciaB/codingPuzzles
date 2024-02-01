function stringSplosion(inputString) {
    let returnString = ""
    let returnString2 = ""
    for (let i = 0; i < inputString.length; i++) {
        returnString = returnString+inputString[i]
        console.log(returnString)
        returnString2 = returnString2+returnString
        console.log(returnString2)
    }
    return returnString2
}

let result = stringSplosion("letter")
console.log(result)