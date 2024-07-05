const mainTitle = document.getElementById('title')
const counter = document.getElementById('counter')
const countValue = document.getElementById('count')

counter.addEventListener('click', function() {
    countValue.innerText = +countValue.innerText + 1
    console.log(typeof +countValue.innerText)
    count = count + 1
})