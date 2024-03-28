/* ------------------------------ Dependencies ------------------------------ */
import apiClient, { AxiosRequestConfig } from '../services/api-client'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

const DEFAULT_STALE_TIME = 10 * 60 * 1000 // 10 Minutes

/* ---------------------------------- Types --------------------------------- */
export interface FetchResponse<T> {
    count: number
    results: T[]
}

export interface CacheQueryConfig<T> {
    retry?: number
    staleTime?: number
    initialData?: FetchResponse<T>
}

export interface CacheInfiniteQueryConfig<T> extends Omit<CacheQueryConfig<T>, 'initialData'> {
    initialPageParam?: number
}

/* -------------------------------- Use Data -------------------------------- */
const useData = <T>(
    url: string,
    queryKey: unknown[],
    cacheConfig?: CacheQueryConfig<T>,
    config?: AxiosRequestConfig,
) => {
    const fetchData = () => apiClient.get<FetchResponse<T>>(url, config)

    return useQuery<FetchResponse<T>>({
        queryKey,
        queryFn: fetchData,
        retry: cacheConfig?.retry ?? 1,
        staleTime: cacheConfig?.staleTime ?? DEFAULT_STALE_TIME,
        initialData: cacheConfig?.initialData,
    })
}

/* ---------------------------- Use Infinite Data --------------------------- */
const useInfiniteData = <T>(
    url: string,
    queryKey: unknown[],
    cacheConfig?: CacheInfiniteQueryConfig<T>,
    config?: AxiosRequestConfig,
) => {
    const fetchData = () => apiClient.get<FetchResponse<T>>(url, config)

    const calculatePageParam = (page: number, operateNumber: number) => {
        const pageNumber = page > 0 ? page + operateNumber : undefined
        if (config) config.params.page = pageNumber
        return pageNumber
    }

    return useInfiniteQuery<FetchResponse<T>>({
        queryKey,
        queryFn: fetchData,
        retry: cacheConfig?.retry ?? 1,
        staleTime: cacheConfig?.staleTime ?? DEFAULT_STALE_TIME,
        initialPageParam: cacheConfig?.initialPageParam ?? 1,
        getNextPageParam: (_lastPage, allPages) => calculatePageParam(allPages.length, 1),
        getPreviousPageParam: (_lastPage, allPages) => calculatePageParam(allPages.length, -1),
    })
}

export { useData, useInfiniteData }
