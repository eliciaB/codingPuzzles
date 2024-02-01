function posNeg(a, b, negative) {
    if (negative) {
        return (a<0 && b<0)
    } else {return (a<0 && b>0 || a>0 && b<0)}
}

let result = posNeg(-1, -1, true)
console.log(result)