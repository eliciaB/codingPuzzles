function largestValue(n1, n2) {
    if (n1>n2) {
        return n1
    }
    return n2
}

function smallestValue(n1, n2) {
    if (n1<n2) {
        return n1
    }
    return n2
}

function centeredAverage(nums) {
    let min = nums[0]
    let max = nums[0]
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        min = smallestValue(min, nums[i])
        max = largestValue(max, nums[i])
        sum = sum + nums[i]
    }
    return (sum-min-max)/(nums.length-2)
}

let result = centeredAverage([1, 2, 3, 4, 100])
console.log(result)