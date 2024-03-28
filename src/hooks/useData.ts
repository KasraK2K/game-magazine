import apiClient, { AxiosRequestConfig } from '../services/api-client'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

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

const useInfiniteData = <T>(url: string, queryKey: unknown[], config?: AxiosRequestConfig) => {
    const fetchData = () => apiClient.get<FetchResponse<T[]>>(url, config).then((response) => response.results)

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

export { useData, useInfiniteData }
