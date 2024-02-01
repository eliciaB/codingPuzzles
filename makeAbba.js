function makeAbba(stringA, stringB) {
    return (stringA+stringB+stringB+stringA)
}

let result = makeAbba("apple", "pie")
console.log(result)