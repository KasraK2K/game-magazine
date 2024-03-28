import ApiClient, { AxiosRequestConfig } from '../services/api-client'
import { useInfiniteQuery } from '@tanstack/react-query'

interface FetchResponse<T> {
    count: number
    results: T
}

const useInfiniteData = <T>(url: string, queryKey: unknown[], config?: AxiosRequestConfig) => {
    const apiClient = new ApiClient(url)

    const fetchData = () => apiClient.getAll<FetchResponse<T[]>>(config).then((response) => response.results)

    const calculatePageParam = (page: number, operateNumber: number) => {
        const pageNumber = page > 0 ? page + operateNumber : undefined
        if (config) config.params.page = pageNumber
        return pageNumber
    }

    return useInfiniteQuery<T[]>({
        queryKey,
        queryFn: fetchData,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 min
        initialPageParam: 1,
        getNextPageParam: (_lastPage, allPages) => calculatePageParam(allPages.length, 1),
        getPreviousPageParam: (_lastPage, allPages) => calculatePageParam(allPages.length, -1),
    })
}

export default useInfiniteData
