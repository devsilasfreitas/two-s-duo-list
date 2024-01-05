import checkExistsName from "./checkExistsName.js"

export default function Sign () {
    const body = document.getElementById('body')
    const h1 = document.createElement('h1')
    h1.innerText = 'Welcome to Two\'s Duo List'
    h1.classList.add('h1Welcome')
    const p = document.createElement('p')
    p.innerText = 'Your best To Do List site to organize your tasks'
    p.classList.add('pWelcome')
    const buttonWelcome = document.createElement('button')
    buttonWelcome.innerText = 'Join two\'s duo list'
    buttonWelcome.classList.add('buttonWelcome')
    const buttonWelcomeImg = document.createElement('img')
    buttonWelcomeImg.src = ''
    buttonWelcomeImg.classList.add('imgWelcome')
    buttonWelcome.appendChild(buttonWelcomeImg)
    
    const parent = document.querySelector('#container')
    parent.classList.add('welcome')
    parent.append (h1, p, buttonWelcome)
    buttonWelcome.addEventListener ('click', function () {
        
        h1.remove()
        p.remove()
        buttonWelcome.remove()
        body.classList.remove('welcome')
        const label = document.createElement ('label')
        label.innerText = 'Hello, enter your first name:'
        label.classList.add ('labelName')
        label.htmlFor = 'nameInput'

        const input = document.createElement ('input')
        input.id = 'nameInput'
        input.type = 'text'
        input.maxLength = 12
        input.placeholder = 'Your first name...'
        const sendName = document.createElement ('img')
        sendName.id = 'sendName'
        sendName.src = './imgs/go-light.png'
        sendName.classList.add ('sendName')

        const containerName = document.createElement('div')
        containerName.classList.add('divSendName')

        containerName.append(input, sendName)

        parent.append (label, containerName)
        input.focus()
        


        input.addEventListener ('keydown', function (key) {
            if (key.key === 'Enter') {
                sendNameFunction ()
            }
        } )
    
        sendName.addEventListener ('click', function () {
            sendNameFunction ()
        })
    
        function sendNameFunction () {
            if (input.value.length < 2) {
                alert(`Your name must be at least 2 characters long`)
            } else {
                localStorage.setItem('name', input.value)
                localStorage.setItem('taskLength', 0)
                parent.parentNode.removeChild(parent)
                window.location.reload()
                checkExistsName()
            }
            parent.classList.remove('welcome')
        }
    })
    const root = document.querySelector(':root').style
    const right = document.getElementById('right')
    const left = document.getElementById('left')
    const imgs = document.querySelectorAll('img')
    function setTheme() {
        const root = document.querySelector(':root').style
        const right = document.getElementById('right')
        const left = document.getElementById('left')
        const imgs = document.querySelectorAll('img')
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'dark') {
                root.setProperty('--background-image', "url('./imgs/welcome-dark.png')")
                root.setProperty('--color', '#ece488')
                root.setProperty('--hover', '#424242')
                root.setProperty('--background-color', '#292929')
                right.classList.remove('right-light')
                left.classList.remove('left-light')
                right.classList.add('right-dark')
                left.classList.add('left-dark')
                imgs.forEach(img => {
                    let newSrc = img.getAttribute('src')
                    newSrc = newSrc.replace('light', 'dark')
                    img.setAttribute('src', newSrc)
                })
            } else {
                imgs.forEach(img => {
                    let newSrc = img.getAttribute('src')
                    newSrc = newSrc.replace('dark', 'light')
                    img.setAttribute('src', newSrc)
                })
            }
        } else {
            localStorage.setItem('theme', 'light')
        }
    }


    right.addEventListener('click', function () {
        const imgs = document.querySelectorAll('img')
        if (localStorage.getItem('theme') === 'dark') {
            localStorage.setItem('theme', 'dark')
            root.setProperty('--background-image', "url('./imgs/welcome-dark.png')")
            root.setProperty('--color', '#ece488')
            root.setProperty('--hover', '#424242')
            root.setProperty('--background-color', '#292929')
            right.classList.remove('right-light')
            left.classList.remove('left-light')
            right.classList.add('right-dark')
            left.classList.add('left-dark')
            imgs.forEach(img => {
                let newSrc = img.getAttribute('src')
                newSrc = newSrc.replace('light', 'dark')
                img.setAttribute('src', newSrc)
            })
        } else {
            localStorage.setItem('theme', 'light')
            root.setProperty('--background-image', "url('./imgs/welcome-light.png')")
            root.setProperty('--color', '#000')
            root.setProperty('--hover', '#c2bb6e')
            root.setProperty('--background-color', '#ece488')
            right.classList.remove('right-dark')
            left.classList.remove('left-dark')
            right.classList.add('right-light')
            left.classList.add('left-light')
            imgs.forEach(img => {
                let newSrc = img.getAttribute('src')
                newSrc = newSrc.replace('dark', 'light')
                img.setAttribute('src', newSrc)
            })
        }
    })
    left.addEventListener('click', function () {
        const imgs = document.querySelectorAll('img')
        if (localStorage.getItem('theme') === 'dark') {
            root.setProperty('--background-image', "url('./imgs/welcome-dark.png')")
            root.setProperty('--color', '#ece488')
            root.setProperty('--hover', '#424242')
            root.setProperty('--background-color', '#292929')
            right.classList.remove('right-light')
            left.classList.remove('left-light')
            right.classList.add('right-dark')
            imgs.forEach(img => {
                let newSrc = img.getAttribute('src')
                newSrc = newSrc.replace('light', 'dark')
                img.setAttribute('src', newSrc)
            })
            left.classList.add('left-dark')

            localStorage.setItem('theme', 'dark')
        } else {
            root.setProperty('--background-image', "url('./imgs/welcome-light.png')")
            root.setProperty('--color', '#000')
            root.setProperty('--hover', '#c2bb6e')
            root.setProperty('--background-color', '#ece488')
            right.classList.remove('right-dark')
            left.classList.remove('left-dark')
            right.classList.add('right-light')
            left.classList.add('left-light')
            imgs.forEach(img => {
                let newSrc = img.getAttribute('src')
                newSrc = newSrc.replace('dark', 'light')
                img.setAttribute('src', newSrc)
            })
            localStorage.setItem('theme', 'light')
        }
    })

    setTheme()
}
