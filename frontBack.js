function frontBack(inputString) {
    if (inputString.length == 1) {
        return inputString
    } else {
    return (inputString[inputString.length-1]+inputString.substring(1, inputString.length-1) +inputString[0])
    }
}

let result = frontBack("b")
console.log(result)