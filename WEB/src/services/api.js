import axios from 'axios'

const api = axios.create({
    baseURL:'https://apibethehero.herokuapp.com/'
})

export default api