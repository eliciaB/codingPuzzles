function stringBits(inputString) {
    let bitString = ""
    for (let i = 0; i < inputString.length; i=i+2) {
        bitString = bitString + inputString[i]
    }
    return bitString
}

let result = stringBits("hello")
console.log(result)