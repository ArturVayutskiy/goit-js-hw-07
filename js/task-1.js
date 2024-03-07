'use srict';

// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка 
// елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const parrentElement = document.querySelector('#categories');
// console.log(parrentElement.children);

const childElements = parrentElement.querySelectorAll('li.item')
// console.log(childElements);
console.log('Number of categories:', childElements.length);

childElements.forEach(child => {
    const title = child.querySelector('h2').textContent;
    console.log('Category', title);

    const items = child.querySelectorAll('ul > li');
    console.log('Elements:', items.length);
});

