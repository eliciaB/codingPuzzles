function extraEnd(inputString) {
    let threeTimes= inputString[inputString.length-2] + inputString[inputString.length-1]
    return (threeTimes+threeTimes+threeTimes)
}

let result = extraEnd("hello")
console.log(result)