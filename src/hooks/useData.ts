import apiClient, { AxiosRequestConfig } from '../services/api-client'
import { useQuery } from '@tanstack/react-query'

interface FetchResponse<T> {
    count: number
    results: T
}

const useData = <T>(config: AxiosRequestConfig, queryKey: string[]) => {
    const fetchData = () => apiClient.request<FetchResponse<T>>(config).then((response) => response.data.results)

    const { data, error, isLoading } = useQuery({
        queryKey,
        queryFn: fetchData,
        gcTime: 10_000,
        staleTime: 10_000,
    })

    return { data, error, isLoading }
}

export default useData
