export default class Task {
    constructor (name) {
        this.name = name
        this.situation = 'pending'
        this.id = parseInt(localStorage.getItem('taskLength'))
        localStorage.setItem('taskLength', parseInt(localStorage.getItem('taskLength')) + 1)
    }

    toogleTask () {
        this.situation = this.situation === 'pending' ? 'completed' : 'pending'
    }
}