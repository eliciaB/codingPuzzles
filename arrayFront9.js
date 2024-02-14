function arrayFront9(nums) {
    let charLimit 
    if(nums.length>4){
        charLimit = 4
    } else {
        charLimit = nums.length
    }
    for (let i = 0; i<charLimit; i++) {
        if (nums[i]==9) {
            return true
        }
    }
    return false
}

let result = arrayFront9([9, 2])
console.log(result)