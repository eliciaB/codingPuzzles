function cigarParty(cigars, isWeekend) {
    // cigars >= 40 && (cigars <=60||isWeekend)
    return (cigars>=40 && cigars<=60 && isWeekend==false || isWeekend == true && cigars >= 40)
}

let result = cigarParty(20, true)
console.log(result)