function array123(nums) {
    for (let i=0; i<nums.length; i++) {
        if (nums[i]==1 && nums[i+1]==2 && nums[i+2]==3) {
            return true
        }
    }
    return false
}

let result = array123([1, 2, 3, 2])
console.log(result)