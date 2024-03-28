import apiClient, { AxiosRequestConfig } from '../services/api-client'
import { useQuery } from '@tanstack/react-query'

interface FetchResponse<T> {
    count: number
    results: T
}

const useData = <T>(url: string, queryKey: unknown[], config: AxiosRequestConfig) => {
    const fetchData = () => apiClient.get<FetchResponse<T>>(url, config).then((response) => response.results)

    return useQuery({
        queryKey,
        queryFn: fetchData,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 min
    })
}

export default useData
