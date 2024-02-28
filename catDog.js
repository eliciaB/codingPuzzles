function countCat(inputString) {
    let counter = 0
    for(let i = 0; i<inputString.length; i++) {
        if (inputString[i] == 'c' && inputString[i+1] == 'a' && inputString[i+2] == 't') {
            counter = counter+1
        }
    }
    return counter
}

function countDog(inputString) {
    let counter = 0
    for (let i = 0; i<inputString.length; i++) {
        if (inputString[i] == 'd' && inputString[i+1] == 'o' && inputString[i+2] == 'g') {
            counter = counter+1
        }
    }
    return counter
}

function catDog(inputString) {
    let catCount = countCat(inputString)
    let dogCount = countDog(inputString)
    if (dogCount == catCount) {
        return true
    } else{
        return false
    }
}

let result = catDog('catcatdogyhtgiv vtdog')
console.log(result)