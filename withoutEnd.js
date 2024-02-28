function withoutEnd(inputString) {
    return inputString.substring(1, inputString.length-1)
}

let result = withoutEnd("hic")
console.log(result)