import platforms from '../data/platforms'
import { useData } from './useData'

export interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatforms = () => {
    return useData<Platform>('/platforms/lists/parents', ['platforms', 'lists', 'parents'], {
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: platforms.length, results: platforms },
    })
}

export default usePlatforms
