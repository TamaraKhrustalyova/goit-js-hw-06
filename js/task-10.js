function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створи функцію createBoxes(amount), яка приймає 
// один параметр - число. Функція створює стільки <div>, 
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим 
// від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Алгоритм
// 1. отримати доступ до елементів діву controls
// 2. повісити слухача подій на кнопки
// 3. створти функцію createBoxes(amount), яка буде створювати коробочки
// кожна наступна більша за попередню та іншого кольору.
// 4. функція виконується таку кількість разів, яке число вказане 
// в input.
// 

const numberRef = document.querySelectorAll('input');
console.log(numberRef);

const createButton = document.querySelector