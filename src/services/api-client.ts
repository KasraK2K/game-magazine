import axios, { AxiosRequestConfig } from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: { key: '6c14b21d76cf46efaeadaa43d88b78d0' },
})

class ApiClient {
    constructor(private endpoint: string) {}

    async getAll<T>(config?: AxiosRequestConfig) {
        return apiClient.get<T>(this.endpoint, config).then((response) => response.data)
    }

    async post<T>(data: T) {
        return apiClient.post<T>(this.endpoint, data).then((response) => response.data)
    }
}

export { type AxiosRequestConfig }

export default ApiClient
