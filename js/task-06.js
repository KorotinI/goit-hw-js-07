function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const deleteBtn = document.querySelector('[data-destroy]');
const inputSpace = document.querySelector('input');

function createBoxes(amount){
  for(let i = 1;i <= amount; i += 1){
    const size = 30 + i * 10
    box.insertAdjacentHTML('beforeend', 
    `<div style = "background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`)
  }
}

createBtn.addEventListener('click', e => {
  e.preventDefault();
  
  let inputValue = parseInt(inputSpace.value, 10)
  if(inputSpace.value >= 1 && inputSpace.value <= 100){
    box.innerHTML = '';
    createBoxes(inputValue)
    inputSpace.value = ''
  }
  })

  function destroyBoxes(){
    box.innerHTML = ''
  }

  deleteBtn.addEventListener('click', destroyBoxes)