export const findFilm = (id: string, movies: any[]) => {
    return movies.find((movie) => movie.imdbID === id)
}
