function commonEnd(a, b) {
    return (a[0] == b[0] || a[a.length-1] == b[b.length-1])
}

let result = commonEnd([1, 2, 2], [7, 3])
console.log(result)