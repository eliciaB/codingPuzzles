function makeBricks(small, big, goal) {
    let needSmallBricks 

    if (big*5>goal) {
        needSmallBricks = goal % 5

    } else {
        needSmallBricks = goal - (big * 5)
    }
    return small >= needSmallBricks
}

let result = makeBricks(3, 2, 10)
console.log(result)