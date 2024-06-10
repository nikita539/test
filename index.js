let count = 0;

for (let i = 0; i < 10; i++) {
    count = i
}


function recursionSum(count) {
    if (count == 0) return 1
    return count + recursionSum(count - 1)
} 

const answer = recursionSum(10)

console.log(answer)

class User {

    constructor(name,serName) {
        this.name = name
        this.serName = serName
    }

}
const user = new User("Nikita", "Evteev")

console.log(user)