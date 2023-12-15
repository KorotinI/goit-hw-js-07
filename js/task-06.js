 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function createBoxes() {
    const inputAmount = document.getElementById('inputAmount');
    const amount = parseInt(inputAmount.value);

    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert('Please enter a number between 1 and 100.');
      return;
    }

    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';

    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.classList.add('box');
      boxesContainer.appendChild(box);

      boxSize += 10;
    }

    inputAmount.value = '';
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }