function love6(a, b) {
    if (a+b==6 || a-b ==6) {
        return true
    } else if (a==6 || b==6) {
        return true
    } else {
        return false
    }
}

let result = love6(6, 3)
console.log(result)