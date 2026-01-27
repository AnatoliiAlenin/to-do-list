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

// Шаблон
//Обертка для списка дел
const wrap = document.createElement('div');
wrap.className = 'wrap';
list.appendChild(wrap)

const conteiner1 = document.createElement('div');
conteiner1.className = 'conteiner';
wrap.appendChild(conteiner1)

const order = document.createElement('p');
order.className = 'order';
order.textContent = "1";
conteiner1.appendChild(order);

const task = document.createElement('p');
task.className = 'task';
task.textContent = "Сделать покупки";
conteiner1.appendChild(task);

const conteiner2 = document.createElement('div');
conteiner2.className = 'conteiner';
wrap.appendChild(conteiner2)

const prove = document.createElement('input');
prove.type = 'checkbox';
prove.className = 'prove';
conteiner2.appendChild(prove);

const del = document.createElement('p');
del.className = 'del';
del.textContent = " - ";
conteiner2.appendChild(del);

element.appendChild(list);