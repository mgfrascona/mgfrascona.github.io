const todoForm = document.querySelector('#todo-form')
const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('#new-todo')
const inputButton = document.querySelector('#todo-form button')

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

function save() {
    localStorage.setItem('todo-list', JSON.stringify(todos))
}

function renderTodos() {
    todoList.innerHTML = ''

    todos.forEach((todo, index) => {
        const li = document.createElement('li')
        li.dataset.index = index

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

        li.append(span, deleteBtn)
        todoList.append(li)
    })
}

// Add a new item to the list
inputButton.addEventListener('click', () => {
    const text = todoInput.value.trim()
    if (!text) {
        alert('Please enter a to-do item.')
        return
    }

    // Add a new item to the list
    todos.push({ text, completed: false })

    save()

    renderTodos()

    todoInput.value = ''
})

// Initial render of existing todos
renderTodos()