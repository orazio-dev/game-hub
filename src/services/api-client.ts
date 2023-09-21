import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '36f30ff1c52c4c7e9948fb50ec53b5cd'
    }
})