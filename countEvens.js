function countEvens(numbers) {
    let counter = 0
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i]%2 == 0) {
            counter = counter+1
        }
    }

    return counter
}

let result = countEvens([2, 4, 6, 8])
console.log(result)