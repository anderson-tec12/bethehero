import axios from 'axios'

const api = axios.create({
    baseURL:'https://apibethehero.herokuapp.com/'
    // baseURL:'http://192.168.15.4:3334'
})

export default api