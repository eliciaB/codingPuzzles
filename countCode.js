function countCode(inputString) {
    let counter = 0
    for (let i = 0; i<inputString.length; i++) {
        if (inputString[i] == 'c' && inputString[i+1] == 'o' && inputString[i+3] == "e") {
            counter = counter+1
        } 
    }

    return counter
}

let result = countCode("cozexxcope")
console.log(result)