function count(number) {
    for (let i = 0; i <= 10; i++) {
        console.log(i)
    }
}
function recursionSum(count) {
    if (count == 0) return 0
    return count + recursionSum(count - 1)
} 


