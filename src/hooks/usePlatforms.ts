import platforms from '../data/platforms'
import { useData } from './useData'

export interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatforms = () => {
    return useData('/platforms/lists/parents', ['platforms', 'lists', 'parents'], {
        staleTime: 24 * 60 * 60 * 1000,
        initialData: platforms,
    })
}

export default usePlatforms
