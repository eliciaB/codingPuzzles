function notString(inputString) {
    if (inputString.startsWith("not")) {
        return inputString
    } else {
        return ("not " + inputString)
    }
}

let result = notString("not bad")
console.log(result)