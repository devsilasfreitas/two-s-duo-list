export default function toogleTheme () {
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


    right.addEventListener('click', function () {
        const imgs = document.querySelectorAll('img')
        if (localStorage.getItem('theme') === 'light') {
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
    left.addEventListener('click', function () {
        const imgs = document.querySelectorAll('img')
        if (localStorage.getItem('theme') === 'light') {
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
    


}