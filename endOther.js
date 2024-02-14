function endOther(a,b) {
    if (a.toLowerCase().endsWith(b.toLowerCase()) || b.toLowerCase().endsWith(a.toLowerCase())) {
        return true
    } else {
        return false
    }
}

let result = endOther("AbC", "HiaBc")
console.log(result)