import { useData } from './useData'
import staticGenres from '../data/genres'

export interface Genre {
    id: number
    name: string
    image_background: string
}

const useGenres = () =>
    useData<Genre>('/genres', ['genres'], { staleTime: 24 * 60 * 60 * 1000, initialData: staticGenres })

export default useGenres
