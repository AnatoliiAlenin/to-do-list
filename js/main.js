const element = document.getElementById('toDo');

const list = document.createElement('div');
list.className = 'list';
// Заголовок
const title = document.createElement('h1');
title.textContent = "Список задач";
title.className = 'title';
list.appendChild(title);

//Контейнер для поля ввода
const box = document.createElement('div');
box.className = 'box';
list.appendChild(box)
//Поле ввода 
const input = document.createElement('input');
input.className = 'input';
input.placeholder = 'введите задачу';
box.appendChild(input);
//Кнопка добавление дела
const btn = document.createElement('button');
btn.className = 'btn';
btn.textContent = "Добавить дело"
box.appendChild(btn);

//  /* */
const tasks = [
    {id: 1, title: "Сделать покупки", done: false},
    {id: 2, title: "Прочитать книгу", done: true},
    {id: 3, title: "Подготовить отчет", done: false},
    {id: 4, title: "Записаться к врачу", done: false},
]

element.appendChild(list);