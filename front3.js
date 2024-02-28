function front3(inputString) {
    let firstThree = inputString[0] + inputString[1] + inputString[2]
    if (inputString.length<3) {
        return inputString+inputString+inputString
    } else {
    return firstThree+firstThree+firstThree
    }
}

let result = front3("js")
console.log(result)