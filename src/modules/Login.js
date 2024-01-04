import Task from "./entities/Task.js"
import toogleTheme from "./toogleTheme.js"

export default function Login () {
    function toogleTask(task) {
        if (task.situation === 'pending') {
            task.situation = 'completed'
        } else {
            task.situation = 'pending'
        }
    }
    const container = document.getElementById ('container')
    container.classList.add('block')
    if (!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify({pending: [], completed: []}))
    }
    let tasks = JSON.parse(localStorage.getItem('tasks'))

    let name = localStorage.getItem('name')

    const headerMain = document.createElement('div')
    headerMain.classList.add('headerMain')

    const containerName = document.createElement ('div')
    containerName.classList.add ('containerName')

    const ola = document.createElement ('h2')
    ola.innerText = 'Hello, '
    ola.classList.add('hello')

    const editName = document.createElement('img')
    editName.src = './imgs/edit-light.png'
    editName.classList.add('editName')
    editName.addEventListener('click', function () {
        inputName.focus()
    })
    
    const inputName = document.createElement ('input')
    inputName.id = 'inputName'
    inputName.value = localStorage.getItem ('name')
    inputName.maxLength = 12
    inputName.addEventListener('focusout', function () {
        if (inputName.value.length < 2) {
            inputName.value = name
            alert('Your name must be at least 2 characters long')
            inputName.focus()
        } else {
            localStorage.setItem('name', inputName.value)
            name = inputName.value
        }
        containerName.removeChild(editName)
    })
    inputName.addEventListener('keydown', function (key) {
        if (key.key === 'Enter') {
            if (inputName.value.length < 2) {
                inputName.value = name
                alert('Your name must be at least 2 characters long')
                inputName.focus()
            } else {
                localStorage.setItem('name', inputName.value)
                name = inputName.value
                inputName.disabled = true
                inputName.disabled = null
            }
        }
    })
    inputName.addEventListener('mouseover', function () {
        containerName.append(editName)
        toogleTheme()
    })
    inputName.addEventListener('mouseout', function() {
        if (!(document.activeElement === inputName)) {
            containerName.removeChild(editName)
        }
    })
    inputName.addEventListener('focusin', function() {
        containerName.append(editName)
        toogleTheme()
    })

    const addTask = document.createElement('button')
    addTask.innerText = 'Add Task '
    addTask.id = 'addTask'
    const span = document.createElement('span')
    span.classList.add('plus')
    span.innerText = '+'
    addTask.append(span)
    const hr = document.createElement('hr')
    hr.classList.add('hr')

    containerName.append(ola, inputName)
    headerMain.append(containerName, addTask)

    
    const taskContainer = document.createElement('div')
    taskContainer.classList.add ('taskContainer')

    toogleTheme()

    function createTask (task, tasks) {
        const taskObject = document.createElement('div')
        taskObject.id = `Container${task.id}`
        taskObject.classList.add('taskObject')

        const taskComplete = document.createElement('input')
        taskComplete.type = 'checkbox'
        taskComplete.id = `Check${task.id}`
        taskComplete.classList.add('checkboxInput')
        taskComplete.title = 'Complete the task'

        const input = document.createElement('input')
        input.classList.add('nameTask')
        input.maxLength = '40'

        const label = document.createElement('label')
        label.innerText = task.name
        label.htmlFor = `Check${task.id}`
        label.id = `Name${task.id}`
        label.classList.add('labelNameTask')

        const saveNameTask = document.createElement('img')
        saveNameTask.classList.add('buttons')
        saveNameTask.title = 'Save task name'
        saveNameTask.src = './imgs/save-light.png'
        
        const changeNameTask = document.createElement('img')
        changeNameTask.classList.add ('buttons')
        changeNameTask.title = 'Edit task name'
        changeNameTask.src = './imgs/edit-light.png'

        const removeTask = document.createElement('img')
        removeTask.classList.add('buttons')
        removeTask.title = 'Remove the task'
        removeTask.src = './imgs/remove-light.png'

        const divNameTask = document.createElement('div')
        divNameTask.classList.add('divNameTask')

        const divButtonTask = document.createElement('div')
        divButtonTask.classList.add('divButtonTask')

        toogleTheme()

        taskComplete.addEventListener('click', function () {
            if (task.situation === 'pending') {
                tasks.completed.unshift(task)
                tasks.pending.forEach((taskItem, i) => {
                    if (task.id === taskItem.id) {
                        tasks.pending.splice(i, 1)
                    }
                })
                taskContainer.removeChild(taskObject)
                if (tasks.pending.length === 0) {
                    const dontExists = document.createElement('p')
                    dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                    dontExists.classList.add('dontExists')
                    taskContainer.append(dontExists)
                }
            } else {
                tasks.pending.push(task)
                tasks.completed.forEach((taskItem, i) => {
                    if (task.id === taskItem.id) {
                        tasks.completed.splice(i, 1)
                    }
                })
                taskContainer.removeChild(taskObject)
                if (tasks.completed.length === 0) {
                    const dontExists = document.createElement('p')
                    dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                    dontExists.classList.add('dontExists')
                    taskContainer.append(dontExists)
                }
            }
            
            toogleTask(task)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            toogleTheme()
        })
        input.addEventListener('focusout', function focusoutlistener() {
            if (input.value.length < 2) {
                taskObject.remove()
                if (task.situation === 'pending') {
                    tasks.pending.forEach((taskItem, index) => {
                    if (taskItem.id === task.id) {
                        tasks.pending.splice(index, 1)
                    }
                } )
                if (tasks.pending.length === 0) {
                    const dontExists = document.createElement('p')
                    dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                    dontExists.classList.add('dontExists')
                    taskContainer.append(dontExists)
                }
                } else {
                    tasks.completed.forEach((taskItem, index) => {
                        if (taskItem.id === task.id) {
                            tasks.completed.splice(index, 1)
                        }
                    } )
                    if (tasks.completed.length === 0) {
                        const dontExists = document.createElement('p')
                        dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                        dontExists.classList.add('dontExists')
                        taskContainer.append(dontExists)
                    }
                }
                toogleTheme()
                localStorage.setItem('tasks', JSON.stringify(tasks))  
            } else {
                task.name = input.value
                input.remove()
                label.innerText = task.name
                divNameTask.appendChild(label)
                saveNameTask.remove()
                divButtonTask.appendChild(changeNameTask)
                removeTask.remove()
                divButtonTask.appendChild(removeTask)
                localStorage.setItem('tasks', JSON.stringify(tasks))
            }
            toogleTheme()
        })
        input.addEventListener('keydown', function(key) {
            if (key.key === 'Enter') {
                if (input.value.length < 2) {
                    alert('The task name must be at least 2 characters long')
                    input.focus()
                } else {
                    task.name = input.value
                    input.remove()
                    label.innerText = task.name
                    divNameTask.appendChild(label)
                    saveNameTask.remove()
                    divButtonTask.appendChild(changeNameTask)
                    removeTask.remove()
                    divButtonTask.appendChild(removeTask)
                    localStorage.setItem('tasks', JSON.stringify(tasks))}
                }
                toogleTheme()
        })
        saveNameTask.addEventListener('click', function() {
            if (input.value.length < 2) {
                input.removeEventListener('focusout', this)
                alert('The task name must be at least 2 characters long')
                input.focus()
            } else {
                task.name = input.value
                input.remove()
                label.innerText = task.name
                divNameTask.appendChild(label)
                saveNameTask.remove()
                divButtonTask.appendChild(changeNameTask)
                removeTask.remove()
                divButtonTask.appendChild(removeTask)
                localStorage.setItem('tasks', JSON.stringify(tasks))
            }
            toogleTheme()
        })
        changeNameTask.addEventListener('click', function() {
            input.value = label.innerText
            divNameTask.removeChild(label)
            divButtonTask.removeChild(changeNameTask)
            divNameTask.append(input, saveNameTask)
            input.focus()
            toogleTheme()
        })

        removeTask.addEventListener('click', function() {
            taskObject.remove()
            if (task.situation === 'pending') {
                tasks.pending.forEach((taskItem, index) => {
                    if (taskItem.id === task.id) {
                        tasks.pending.splice(index, 1)
                    }
                } )
                if (tasks.pending.length === 0) {
                    const dontExists = document.createElement('p')
                    dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                    dontExists.classList.add('dontExists')
                    taskContainer.append(dontExists)
                }

            } else {
                tasks.completed.forEach((taskItem, index) => {
                    if (taskItem.id === task.id) {
                        tasks.completed.splice(index, 1)
                    }
                } )
                if (tasks.completed.length === 0) {
                    const dontExists = document.createElement('p')
                    dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                    dontExists.classList.add('dontExists')
                    taskContainer.append(dontExists)
                }
            }
            localStorage.setItem('tasks', JSON.stringify(tasks))
        })
        divNameTask.append(taskComplete, input, saveNameTask)
        divButtonTask.append(removeTask)
        taskObject.append(divNameTask, divButtonTask)
        taskContainer.append(taskObject)
        input.focus()
        toogleTheme()

    }

    function createTaskExistent (task, tasks) {
        const taskObject = document.createElement('div')
        taskObject.id = `Container${task.id}`
        taskObject.classList.add('taskObject')

        const taskComplete = document.createElement('input')
        taskComplete.type = 'checkbox'
        taskComplete.id = `Check${task.id}`
        taskComplete.classList.add('checkbox')
        taskComplete.title = 'Complete the task'

        const input = document.createElement('input')
        input.classList.add('nameTask')
        input.maxLength = '40'

        const label = document.createElement('label')
        label.innerText = task.name
        label.htmlFor = `Check${task.id}`
        label.id = `Name${task.id}`
        label.classList.add('labelNameTask')

        if (task.situation === 'completed') {
            label.style.textDecoration = 'line-through'
            taskComplete.checked = true
        }

        const saveNameTask = document.createElement('img')
        saveNameTask.classList.add('buttons')
        saveNameTask.title = 'Save task name'
        saveNameTask.src = './imgs/save-light.png'
        
        const changeNameTask = document.createElement('img')
        changeNameTask.classList.add ('buttons')
        changeNameTask.title = 'Edit task name'
        changeNameTask.src = './imgs/edit-light.png'

        const removeTask = document.createElement('img')
        removeTask.classList.add('buttons')
        removeTask.title = 'Remove the task'
        removeTask.src = './imgs/remove-light.png'

        const divNameTask = document.createElement('div')
        divNameTask.classList.add('divNameTask')

        const divButtonTask = document.createElement('div')
        divButtonTask.classList.add('divButtonTask')

        toogleTheme()

        taskComplete.addEventListener('click', function () {
            if (task.situation === 'pending') {
                tasks.completed.unshift(task)
                tasks.pending.forEach((taskItem, i) => {
                    if (task.id === taskItem.id) {
                        tasks.pending.splice(i, 1)
                    }
                })
                taskContainer.removeChild(taskObject)
                if (tasks.pending.length === 0) {
                    const dontExists = document.createElement('p')
                    dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                    dontExists.classList.add('dontExists')
                    taskContainer.append(dontExists)
                }
            } else {
                tasks.pending.push(task)
                tasks.completed.forEach((taskItem, i) => {
                    if (task.id === taskItem.id) {
                        tasks.completed.splice(i, 1)
                    }
                })
                taskContainer.removeChild(taskObject)
                if (tasks.completed.length === 0) {
                    const dontExists = document.createElement('p')
                    dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                    dontExists.classList.add('dontExists')
                    taskContainer.append(dontExists)
                }
            }
            toogleTask(task)
            localStorage.setItem('tasks', JSON.stringify(tasks))
        })
        input.addEventListener('focusout', function focusoutlistener() {
            if (input.value.length < 2) {
                taskObject.remove()
                if (task.situation === 'pending') {
                    tasks.pending.forEach((taskItem, index) => {
                    if (taskItem.id === task.id) {
                        tasks.pending.splice(index, 1)
                    }
                } )
                if (tasks.pending.length === 0) {
                    const dontExists = document.createElement('p')
                    dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                    dontExists.classList.add('dontExists')
                    taskContainer.append(dontExists)
                }
                } else {
                    tasks.completed.forEach((taskItem, index) => {
                        if (taskItem.id === task.id) {
                            tasks.completed.splice(index, 1)
                        }
                    } )
                    if (tasks.completed.length === 0) {
                        const dontExists = document.createElement('p')
                        dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                        dontExists.classList.add('dontExists')
                        taskContainer.append(dontExists)
                    }
                }
                localStorage.setItem('tasks', JSON.stringify(tasks))  
                
            } else {
                task.name = input.value
                input.remove()
                label.innerText = task.name
                divNameTask.appendChild(label)
                saveNameTask.remove()
                divButtonTask.appendChild(changeNameTask)
                removeTask.remove()
                divButtonTask.appendChild(removeTask)
                localStorage.setItem('tasks', JSON.stringify(tasks))
            }
            toogleTheme()
        })
        input.addEventListener('keydown', function(key) {
            if (key.key === 'Enter') {
                if (input.value.length < 2) {
                    alert('The task name must be at least 2 characters long')
                    input.focus()
                } else {
                    task.name = input.value
                    input.remove()
                    label.innerText = task.name
                    divNameTask.appendChild(label)
                    saveNameTask.remove()
                    divButtonTask.appendChild(changeNameTask)
                    removeTask.remove()
                    divButtonTask.appendChild(removeTask)
                    localStorage.setItem('tasks', JSON.stringify(tasks))
                }
            }
            toogleTheme()
        })
        saveNameTask.addEventListener('click', function() {
            if (input.value.length < 2) {
                input.removeEventListener('focusout', this)
                alert('The task name must be at least 2 characters long')
                input.focus()
            } else {
                task.name = input.value
                input.remove()
                label.innerText = task.name
                divNameTask.appendChild(label)
                saveNameTask.remove()
                divButtonTask.appendChild(changeNameTask)
                removeTask.remove()
                divButtonTask.appendChild(removeTask)
                localStorage.setItem('tasks', JSON.stringify(tasks))
            }
            toogleTheme()
        })
        changeNameTask.addEventListener('click', function() {
            input.value = label.innerText
            divNameTask.removeChild(label)
            divButtonTask.removeChild(changeNameTask)
            divNameTask.append(input, saveNameTask)
            input.focus()
        })

        removeTask.addEventListener('click', function() {
            taskObject.remove()
            if (task.situation === 'pending') {
                tasks.pending.forEach((taskItem, index) => {
                    if (taskItem.id === task.id) {
                        tasks.pending.splice(index, 1)
                    }
                } )
                if (tasks.pending.length === 0) {
                    const dontExists = document.createElement('p')
                    dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                    dontExists.classList.add('dontExists')
                    taskContainer.append(dontExists)
                }
            } else {
                tasks.completed.forEach((taskItem, index) => {
                    if (taskItem.id === task.id) {
                        tasks.completed.splice(index, 1)
                    }
                } )
                
                if (tasks.completed.length === 0) {
                    const dontExists = document.createElement('p')
                    dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
                    dontExists.classList.add('dontExists')
                    taskContainer.append(dontExists)
                }
            }
            localStorage.setItem('tasks', JSON.stringify(tasks))
        })

        toogleTheme()

        divNameTask.append(taskComplete, label)
        divButtonTask.append(changeNameTask, removeTask)

        taskObject.append(divNameTask, divButtonTask)
        taskContainer.append(taskObject)
    }

    const optionSituations = document.createElement('div')
    optionSituations.classList.add('optionSituations')
    const pending = document.createElement('div')
    pending.innerText = 'Pending'
    pending.classList.add('active', 'situations')
    const completed = document.createElement('div')
    completed.innerText = 'Completed'
    completed.classList.add('situations')

    pending.addEventListener('click', function () {
        toogleTheme()
        if (completed.classList.contains('active')) {
            completed.classList.remove('active')
            pending.classList.add('active')
        }
        document.querySelectorAll('.taskContainer > *').forEach(task => task.remove())
        if (tasks.pending.length > 0) {
            tasks.pending.forEach(task => {
                createTaskExistent(task, tasks)
                toogleTheme()
            })
        } else if (tasks.pending.length === 0) {
            const dontExists = document.createElement('p')
            dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
            dontExists.classList.add('dontExists')
            taskContainer.append(dontExists)
        }
        addTask.disabled = null
        toogleTheme()
    })

    completed.addEventListener('click', function () {
        toogleTheme()
        if (pending.classList.contains('active')) {
            pending.classList.remove('active')
            completed.classList.add('active')
        }
        document.querySelectorAll('.taskContainer > *').forEach(task => task.remove())
        if (tasks.completed.length > 0) {
            tasks.completed.forEach(task => {
                createTaskExistent(task, tasks)
                toogleTheme()
            })
            toogleTheme()
        } else if (tasks.completed.length === 0) {
            const dontExists = document.createElement('p')
            dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
            dontExists.classList.add('dontExists')
            taskContainer.append(dontExists)
        }
        addTask.disabled = true
        toogleTheme()
    })
    optionSituations.append(pending, completed)
    container.append(headerMain, hr, optionSituations, taskContainer)

    if (tasks.pending.length > 0) {
        tasks.pending.forEach(task => {
            createTaskExistent(task, tasks);
            toogleTheme()
        })
    } else {
        const dontExists = document.createElement('p')
        dontExists.innerText = 'There is nothing here, create a task using the "Add Task" button'
        dontExists.classList.add('dontExists')
        taskContainer.append(dontExists)
    }

    addTask.addEventListener('click', function() {
        if (tasks.pending.length === 0) {
            taskContainer.removeChild(document.querySelector('.dontExists'))
        }
        tasks.pending.push(new Task(''))
        createTask(tasks.pending[tasks.pending.length - 1], tasks)
    })

    toogleTheme()

}
