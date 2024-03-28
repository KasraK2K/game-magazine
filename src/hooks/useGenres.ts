import genres from '../data/genres'
import { useData } from './useData'

export interface Genre {
    id: number
    name: string
    image_background: string
}

const useGenres = () => useData<Genre>('/genres', ['genres'], { staleTime: 24 * 60 * 60 * 1000, initialData: genres })

export default useGenres
