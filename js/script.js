const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')

function toggleMeny() {
    document.querySelector('.navLinks').classList.toggle('navActive')
    document.querySelector('.burger').classList.toggle('toggle')
}

burger.addEventListener('click', toggleMeny)