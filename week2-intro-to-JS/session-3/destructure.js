// Destructuring
// Object
const obj = {
    model: "i20",
    color: '',
    year: 2020
}

const { model, color = "red", year: myYear } = obj

const year = "2020"
console.log(myYear)
console.log(color)
// Array
let arr = [1, 2, 3, 4, 5]

let [a, b, c, d, f] = arr
console.log(a) // 1