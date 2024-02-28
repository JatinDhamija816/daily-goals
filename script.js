const title = document.getElementById('title')
const desc = document.getElementById('desc')
const form = document.querySelector('form')
const container = document.querySelector('.container')

const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

showAllTasks()

function showAllTasks() {
    tasks.forEach((value, index) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'task')

        const innerDiv = document.createElement('div')
        div.setAttribute('id', 'para')
        div.append(innerDiv)

        const h3 = document.createElement('h3')
        h3.innerText = value.title
        innerDiv.append(h3)

        const span = document.createElement('span')
        span.innerText = value.desc
        innerDiv.append(span)

        const btn = document.createElement('button')
        btn.setAttribute('class', 'delete')
        btn.innerText = '-'
        btn.addEventListener('click', () => {
            removeTask()
            tasks.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            showAllTasks()
        })
        div.append(btn)

        container.append(div)
    })
}

function removeTask() {
    tasks.forEach(() => {
        const div = document.querySelector('.task')
        div.remove()
    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    removeTask()
    tasks.push({
        title: title.value,
        desc: desc.value
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    showAllTasks()
    title.value = ''
    desc.value = ''
})