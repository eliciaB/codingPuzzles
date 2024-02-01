function firstLast6(inputArray) {
    return (inputArray[0] ==6 || inputArray[inputArray.length-1] == 6)
}

let result = firstLast6([6, 6, 6, 6])
console.log(result)

result = firstLast6([5, 5, 6])
console.log(result)

result = firstLast6([6, 5, 5])
console.log(result)

result = firstLast6([5, 5, 5])
console.log(result)