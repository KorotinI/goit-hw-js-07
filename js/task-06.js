function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes() {
  const boxCountInput = document.getElementById("boxCountInput");
  const amount = parseInt(boxCountInput.value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }

  boxCountInput.value = "";
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

document.getElementById("createButton").addEventListener("click", createBoxes);
document
  .getElementById("destroyButton")
  .addEventListener("click", destroyBoxes);