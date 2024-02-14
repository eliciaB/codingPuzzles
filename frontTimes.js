function getFront(inputString) {
    if (inputString.length < 3) {
        return inputString
    } 
    return inputString[0] + inputString[1] + inputString[2]
}

function multiplyString(inputString, n) {
    let newString = ""
    for (i=0; i<n; i++) {
        newString = newString + inputString
    }
    return newString
}


function frontTimes(inputString, n) {
   let front = getFront(inputString)
   return multiplyString(front, n)
}

let result = frontTimes("ab", 2)
console.log(result)