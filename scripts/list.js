const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('#new-todo')
const inputButton = document.querySelector('#todo-form button')

const todos = JSON.parse(localStorage.getItem('todo-list')) || []

function save() {
    localStorage.setItem('todo-list', JSON.stringify(todos))
}

function renderTodos() {
    todoList.innerHTML = ''

    todos.forEach((todo, index) => {
        const li = document.createElement('li')
        li.className = todo.completed ? 'completed' : ''

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = todo.completed
        checkbox.addEventListener('change', () => {
            todos[index].completed = checkbox.checked
            save()
            renderTodos()
        })

        const span = document.createElement('span')
        span.textContent = todo.text

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.className = 'todo-delete'
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1)
            save()
            renderTodos()
        })

        li.append(checkbox, span, deleteBtn)
        todoList.append(li)
    })
}

function addTodo() {
    const text = todoInput.value.trim()
    if (!text) return
    todos.push({ text, completed: false })
    save()
    renderTodos()
    todoInput.value = ''
}

inputButton.addEventListener('click', addTodo)

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo()
})

renderTodos()
