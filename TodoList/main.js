const btn = document.querySelector('.send_todo').addEventListener('click', createNewTodo);
document.querySelector('.send_todo').previousElementSibling.addEventListener('keypress', createNewTodo);
const todoDoc = document.querySelector('input')
const list = document.querySelector('.todo_list')
document.addEventListener('DOMContentLoaded', loadTodo)


function createNewTodo(event) {

    if (event.pointerType === 'mouse' || event.key === "Enter") {
        const newTodo = todoDoc.value.trim()
        if (newTodo) {
            saveTodo(newTodo)
            crerateTodo(newTodo)
            todoDoc.value = ''
        } else {
            alert('input failed')
        }
    }
}

function crerateTodo(text) {
    const li = document.createElement('li');
    li.innerText = text;
    li.addEventListener('click', removeTodo)
    list.append(li)
}

function removeTodo() {
    this.removeEventListener('click', removeTodo)
    this.remove()
    removeTodoStorage(this.innerText)
}

function saveTodo(text) {
    const affairs = JSON.parse(localStorage.getItem('todos')) || [];
    localStorage.setItem('todos', JSON.stringify([...affairs, text]))

}


function loadTodo() {
    const affairs = JSON.parse(localStorage.getItem('todos'))
    if (affairs) {
        affairs.forEach(el => {
            crerateTodo(el)
        });

    }


}

function removeTodoStorage(text) {
    const affairs = JSON.parse(localStorage.getItem('todos'))
    localStorage.setItem('todos', JSON.stringify(affairs.reduce((acc, el) => el !== text ? [...acc, el] : acc, [])))
}