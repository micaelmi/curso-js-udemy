const text = document.querySelector('.container')
const paragraphs = text.querySelectorAll('p')

const bodyStyles = getComputedStyle(document.body)
const backgroundColorBody = bodyStyles.backgroundColor
console.log(backgroundColorBody)

for (let p of paragraphs) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#f49999'
}