import axios from 'axios';

export default axios.create({
    baseURL:'https://05b4-106-77-61-33.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
});