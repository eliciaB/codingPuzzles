function fixTeen(n) {
    if (n>=13 && n<=14 || n>=17 && n<=19) {
        return 0
    } else {
        return n
    }
}

function noTeenSum(a, b, c) {
    return fixTeen(a) + fixTeen(b) + fixTeen(c)
}

let result = noTeenSum(1, 16, 3)
console.log(result)