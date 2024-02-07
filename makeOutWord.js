function makeOutWord(out, word) {
    return (out[0]+out[1]+word+out[2]+out[3])
}

let result = makeOutWord("<<>>", "yay")
console.log(result)