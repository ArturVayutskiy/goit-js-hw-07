function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Отримати посилання на необхідні елементи
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Додати слухача подій
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

// Функція для створення блоків
function createBoxes() {
    destroyBoxes();
  const amount = input.value;
//   Умова: якщо значення value менше ніж 1 або білше ніж 100 та число ціле
// виводимо повідомлення(в завданні вказано нічого не виводити)
  if (amount < 1 || amount > 100 || !Number.isInteger(+amount)) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  
  const boxes = [];
  let defaulSizeBox = 30;
  
//   Якщо число від 1 до 100 то створюємо блоки
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${defaulSizeBox}px`;
    box.style.height = `${defaulSizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    defaulSizeBox += 10;
  }
  
  // Додаємо блоки в контейнер
  boxesContainer.append(...boxes);
}

// Функція для очищення блоків
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
