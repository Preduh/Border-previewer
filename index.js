const borderRight = document.getElementById('border-right')
const borderLeft = document.getElementById('border-left')
const borderTop = document.getElementById('border-top')
const borderDown = document.getElementById('border-down')

const figure = document.getElementById('figure')

const changeBorderRight = () => {
    figure.style.borderRadius = `${borderTop.value}% ${100 - borderTop.value}% ${borderDown.value}% ${100 - borderDown.value}% / ${100 - borderLeft.value}% ${borderRight.value}% ${100 - borderRight.value}% ${borderLeft.value}%`
}

borderRight.addEventListener('mousemove', changeBorderRight)

const changeBorderLeft = () => {
    figure.style.borderRadius = `${borderTop.value}% ${100 - borderTop.value}% ${borderDown.value}% ${100 - borderDown.value}% / ${100 - borderLeft.value}% ${borderRight.value}% ${100 - borderRight.value}% ${borderLeft.value}%`
}

borderLeft.addEventListener('mousemove', changeBorderLeft)

const changeBorderTop = () => {
    figure.style.borderRadius = `${borderTop.value}% ${100 - borderTop.value}% ${borderDown.value}% ${100 - borderDown.value}% / ${100 - borderLeft.value}% ${borderRight.value}% ${100 - borderRight.value}% ${borderLeft.value}%`
}

borderTop.addEventListener('mousemove', changeBorderTop)

const changeBorderDown = () => {
    figure.style.borderRadius = `${borderTop.value}% ${100 - borderTop.value}% ${borderDown.value}% ${100 - borderDown.value}% / ${100 - borderLeft.value}% ${borderRight.value}% ${100 - borderRight.value}% ${borderLeft.value}%`
}

borderDown.addEventListener('mousemove', changeBorderDown)