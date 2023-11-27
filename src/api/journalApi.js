
import axios from 'axios';

const journalApi = axios.create({
    baseURL:'https://vue-demos-b04e8-default-rtdb.firebaseio.com'
})

export default journalApi