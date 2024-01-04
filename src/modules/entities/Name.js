export default class Name {
    constructor (name) {
        this.name = name
    }

    setName (newName) {
        this.name = newName
        localStorage.setItem('name', this)
    }
}