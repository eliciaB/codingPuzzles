function minNum(n1, n2) {
    if(n1<n2) {
        return n1
    } 
    return n2
}

function maxNum(n1, n2) {
    if(n1>n2) {
        return n1
    }
    return n2
}

function bigDiff(nums) {
    let min = nums[0]
    let max = nums[0]
    for (let i = 0; i<nums.length; i++) {
        min = minNum(min, nums[i])
        max = maxNum(max, nums[i])
    } 
    return max-min
}

let result = bigDiff([10, 2, 5, 7])
console.log(result)