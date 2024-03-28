import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: { key: '6c14b21d76cf46efaeadaa43d88b78d0' },
})

class ApiClient {
    constructor() {}

    async get<T>(endpoint: string, config?: AxiosRequestConfig) {
        return apiClient.get<T>(endpoint, config).then((response) => response.data)
    }

    async post<T>(endpoint: string, data: T) {
        return apiClient.post<T>(endpoint, data).then((response) => response.data)
    }
}

export { type AxiosRequestConfig }

export default new ApiClient()
