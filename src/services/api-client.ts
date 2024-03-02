import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6c14b21d76cf46efaeadaa43d88b78d0',
    },
})
