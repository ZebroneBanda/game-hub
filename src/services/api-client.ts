import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '42143d3540dd452aa11e4b454265d18c'
    }
})