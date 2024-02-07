function arrayFront9(nums) {
    if(nums.length>4){
        for (let i = 0; i<4; i++) {
            if (nums[i]==9) {
                return true
            }
        }
    } else {
        for (let i = 0; i<nums.length; i++) {
            if (nums[i]==9) {
                return true
            }
        }
    }
    return false
}

let result = arrayFront9([9, 2])
console.log(result)