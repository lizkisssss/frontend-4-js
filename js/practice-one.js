/* Розробіть програму, яка відображає список завдань з можливістю додавання
та видалення виконаних завдань.
Використовуйте делегування подій для обробки кліків на кнопках видалення завдань. 
Всі обробники подій мають бути підвішені на батьківський елемент списку.
для перевірки використовуй властив або методи nodeName, closest(), classList.contains()

1) Створити форму для додавання нової задачі
 з полем введення та кнопкою "Додати".
2) Створити список, в який будуть додаватися всі нові задачі. 
3) Кожна задача має містити кнопку для видалення.
4) При додаванні нової задачі до списку, 
вона має додаватися у вигляді нового елементу списку.
- очищуй поле після створення
- використовуй шаблонізатор для розмітки елементу списку
- використовуй бібліотеку для ідентифікатора
- додававй ідентифікатор в атрибут data
- використовуй бібліотеку lodash
5) Всі задачі мають зберігатися у масиві для зручного керування.
6) Для кожної задачі у списку є кнопка "Видалити", 
при кліку на яку задача має видалятися зі списку та з масиву.
7) використовуй localStorage, щоб зберігати список завдань 
після перезавантаження сторінки 
8) додатково: використовуй бібліотеку нотифікацій*/
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const todos = [];

const renderTodoList = () => { 
    const markupList = todos.map(todo => {
        return <li class="todo-item"><b>${todo}</b> <button class="todo-delete">Delete</button></li>;
    });
    console.log(markupList);
    const murkup = markupList.join(" ");
    console.log(murkup);
    todoList.innerHTML = murkup;
};

const handleTodoListClick = () => { };

const addTodo = (event) => { 
    event.preventDefault();
    let toDoName = todoInput.value.trim();
    if(!toDoName){
        return ;
    }
    todos.push(toDoName);
    console.log(todos);
    todoForm.reset();
    renderTodoList();
};

todoForm.addEventListener('submit', addTodo)