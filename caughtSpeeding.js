function caughtSpeeding(speed, isBirthday) {
    if (isBirthday) {
        console.log("birthday is true!")
        let result0 = speed<=65
        let result1 = speed>=66 && speed <=85
        let result2 = speed>=86
        if(result0) {
            return 0
        }
        if(result1) {
            return 1
        }
        if(result2) {
            return 2
        }
    } else {  
        console.log("birthday is false")
        let result0 = speed<=60
        let result1 = speed>=61 && speed <=80
        let result2 = speed>=81
        console.log("result 0: " +result0)
        if(result0) {
            return 0 
        }
        console.log("result 1: " +result1)
        if(result1) {
            return 1
        }
        console.log("result 2: " +result2)
        if(result2) {
            return 2
        }
     }
     return 
}

let result = caughtSpeeding(60, false)
console.log(result)