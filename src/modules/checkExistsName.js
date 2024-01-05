import Login from './Login.js';
import Sign from './Sign.js';
import toogleTheme from './toogleTheme.js';

export default function checkExistsName () {
    toogleTheme()
    if (localStorage.getItem('name')) {
        Login ()
    } else {
        Sign ()
    }
}