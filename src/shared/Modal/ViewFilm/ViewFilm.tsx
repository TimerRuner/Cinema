import React from "react"
import styles from "./viewfilm.css"
import { Buttons } from "../../Buttons"
import { useParams } from "react-router-dom"
import { useTypeSelector } from "../../../hooks/useTypeSelector"

export function ViewFilm() {
    const { id } = useParams()
    const { movies } = useTypeSelector((state) => state.cinema)
    const film = movies.find((movie) => movie.imdbID === id)
    if (!id) return null

    /*
      Metascore, // 91
      Genre, // Drama
      Runtime, // 138 min
    */

    console.log(film?.Metascore, film?.Genre, film?.Runtime)

    return (
        <div className={styles.about}>
            <div className={styles.about__view}>
                <div className={styles.about__img}>
                    <img src={film?.Poster} alt="poster" />
                </div>
                <Buttons identifire={id} />
            </div>
            <div className={styles.about__content}>
                <h2 className={styles.about__title}>{film?.Title}</h2>
                {/* Rating */}
                <p className={styles.about__text}>{film?.Plot}</p>
                {/* AdditionalInfo */}
                <table>
                    <tbody>
                        <tr>
                            <th>Production</th>
                            <td>{film?.Production}</td>
                        </tr>
                        <tr>
                            <th>Country</th>
                            <td>{film?.Country}</td>
                        </tr>
                        <tr>
                            <th>Dierector</th>
                            <td>{film?.Director}</td>
                        </tr>
                        <tr>
                            <th>Writer</th>
                            <td>{film?.Writer}</td>
                        </tr>
                        <tr>
                            <th>Actors</th>
                            <td>{film?.Actors}</td>
                        </tr>
                        <tr>
                            <th>Awards</th>
                            <td>{film?.Awards}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
