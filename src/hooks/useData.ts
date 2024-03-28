import ApiClient, { AxiosRequestConfig } from '../services/api-client'
import { useQuery } from '@tanstack/react-query'

interface FetchResponse<T> {
    count: number
    results: T
}

const useData = <T>(url: string, queryKey: unknown[], config: AxiosRequestConfig) => {
    const apiClient = new ApiClient(url)
    const fetchData = () => apiClient.get<FetchResponse<T>>(config).then((response) => response.results)

    return useQuery({
        queryKey,
        queryFn: fetchData,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 min
    })
}

export default useData
