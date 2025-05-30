// DOM Document Object Model


// let text = document.querySelector('.Hello')
// let jonka = document.querySelector('#jonka')
// let fri = document.querySelector('h3')
// let box = document.querySelector('.box')

// fri.style.backgroundColor = 'yellowgreen'
// fri.style.width = '360px'
// fri.textContent = 'FriStylo'
// fri.textContent = "emir "

// jonka.innerHTML = `<i>Jonka</i> <mark>Behzod </mark>`
// box.innerHTML = `
//     <h2>Behzod Jonka</h2>
// `



let savolNames = prompt('ismin yoz')
let familaya = prompt(' familani yoz')
let yoshi = prompt(' yoshi yoz')
let balli = prompt("balini yoz")
let names = document.querySelector('.name')
let surname = document.querySelector(".surname")
let age = document.querySelector(".age")
let ball = document.querySelector(".ball")
let body = document.querySelector("body")



names.innerHTML = ` ismi: ${savolNames} `
surname.innerHTML = ` familayasi: ${familaya} `
age.innerHTML = ` yoshi: ${yoshi} `
ball.innerHTML = ` balli: ${balli} `
if (balli >= 60) {
     body.style.backgroundColor = 'yellowgreen'
} else {
    body.style.backgroundColor = 'red'

}


