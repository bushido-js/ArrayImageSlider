const buttons = document.querySelectorAll('.btn')
const imageDiv = document.querySelector('.img-container')

const pictures = [
  'contBcg-0',
  'contBcg-1',
  'contBcg-2',
  'contBcg-3',
  'contBcg-4'
]

let number = 0

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('btn-left')) {
      number--
      if (number < 0) {
        number = pictures.length - 1
      }
      imageDiv.style.backgroundImage = `url(./img/${pictures[number]}.jpeg)`
    } else if (button.classList.contains('btn-right')) {
      number++
      if (number > pictures.length - 1) {
        number =  0
      }
      
      imageDiv.style.backgroundImage = `url(./img/${pictures[number]}.jpeg)`
      console.log(number);
    }
  })
})