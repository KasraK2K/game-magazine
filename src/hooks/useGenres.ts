import useData from './useData'

interface Genre {
    id: 0
    name: string
}

const useGenres = () => useData<Genre>('/genres')

export default useGenres
