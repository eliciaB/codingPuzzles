function reverseString(inputString) {
    let returnString = ""
    for (let i= 0; i< inputString.length; i++) {
        console.log(inputString[inputString.length-i-1])
        returnString = returnString+inputString[inputString.length-i-1]
        console.log("returnString=" + returnString)
    } 
    return returnString
}

let result = reverseString("apple")
console.log(result)