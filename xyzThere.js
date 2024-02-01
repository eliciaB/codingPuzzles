function xyzThere(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i-1] !== "." && inputString[i] == 'x' && inputString[i+1] == 'y' && inputString[i+2]) {
            return true
        }
    }
    return false
}

let result = xyzThere('xyzlkdsfj.xyz')
console.log(result)