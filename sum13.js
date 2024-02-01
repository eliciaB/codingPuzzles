function sum13(numbers) {
    let addedNumbers = 0
    for (let i= 0; i<numbers.length; i++) {
        if (numbers[i] !== 13) {
            console.log(numbers)
            addedNumbers = addedNumbers+numbers[i]
        } else {return addedNumbers}
    }
    return addedNumbers
}

let result = sum13([1, 2, 3, 13, 2])
console.log(result)