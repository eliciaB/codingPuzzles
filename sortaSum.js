function sortaSum(a, b) {
    if(a+b>=10 && a+b<=19) {
        return 20
    } 
    return a+b
}

let result = sortaSum(11,10)
console.log(result)