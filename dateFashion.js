function dateFashion(you, date) {
    let ifUgly = you<=2||date<=2
    let ifHot = you>=8 || date>=8
    if (ifUgly) {
        return 0
    } else if(ifHot){
        return 2
    } else {return 1}
}

let result = dateFashion(10,2)
console.log(result)