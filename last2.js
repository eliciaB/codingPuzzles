function last2(inputString) {
    let counter = 0
    for (let i = 0; i<inputString.length; i++) {
        if (inputString[i] == inputString[inputString.length-2] && inputString[i+1] == inputString[inputString.length-1]) {
            counter = counter+1
        }
    }   
    return counter-1
}

let result = last2('xaxxxaxaxx')
console.log(result)