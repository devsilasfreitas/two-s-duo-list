import Login from './Login.js';
import Sign from './Sign.js';

export default function checkExistsName () {
    if (localStorage.getItem('name')) {
        Login ()
    } else {
        Sign ()
    }
}
