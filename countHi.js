function countHi(returnHi) {
    let counter = 0
    for (let i = 0; i<returnHi.length; i++) {
        if (returnHi[i] == 'h' && returnHi[i+1] == 'i') {
            counter = counter+1
        } 
    }

    return counter
}

let result = countHi("abc h hi hi hi hi")
console.log(result)