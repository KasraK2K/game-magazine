import useData from './useData'

export interface Genre {
    id: 0
    name: string
    image_background: string
}

const useGenres = () => useData<Genre>('/genres')

export default useGenres
