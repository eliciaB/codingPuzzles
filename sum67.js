function sum67(nums) {
    let total= 0
    let addingMode = true
    for (let i=0; i<nums.length; i++) {
        if (nums[i]==6) {
            addingMode = false
        }
        if (!addingMode && nums[i]==7) {
            addingMode=true
        }
        if (addingMode) {
            total = total+nums[i]
        } 
    }
    return total
}

let result = sum67([1, 2, 2, 6, 7, 2])
console.log(result)