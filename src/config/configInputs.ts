import { isEmpty } from "../utils/js/isObjectEmpty"
export interface IFormConfig {
    isFormValid: boolean
    formControls: { [key: string]: IInputConfig }
}
export interface IInputConfig {
    value: string
    Title?: string
    Poster?: string
    Plot?: string
    Runtime?: string
    Genre?: string
    Production?: string
    Country?: string
    Director?: string
    Writer?: string
    Actors?: string
    Awards?: string
    Metascore?: string
    Year?: string
    type: string
    label: string
    errorMessage: string
    valid: boolean
    touched: boolean
    validation: IValidation
}
export interface IValidation {
    required: boolean
    minLength?: number
    number?: boolean
}
export const getInputConfig = (
    film?: any,
    defaultValid?: boolean
): IFormConfig => {
    if (!isEmpty(film)) {
        return {
            isFormValid: defaultValid ? defaultValid : false,
            formControls: {
                title: {
                    value: film?.Title,
                    Title: film?.Title,
                    type: "text",
                    label: "Title",
                    errorMessage: "Enter title of film !",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                poster: {
                    value: film?.Poster,
                    Poster: film?.Poster,
                    type: "text",
                    label: "Poster",
                    errorMessage: "Enter poster link!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                plot: {
                    value: film?.Plot,
                    Plot: film?.Plot,
                    type: "textarea",
                    label: "Plot",
                    errorMessage: "Enter short plot!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 10,
                    },
                },
                rating: {
                    value: film?.Metascore,
                    Metascore: film?.Metascore,
                    type: "text",
                    label: "Rating",
                    errorMessage: "Enter rating from 1 to 100!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                year: {
                    value: film?.Year,
                    Year: film?.Year,
                    type: "text",
                    label: "Year",
                    errorMessage: "Enter year!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                runtime: {
                    value: film?.Runtime,
                    Runtime: film?.Runtime,
                    type: "text",
                    label: "Runtime",
                    errorMessage: "Enter minutes!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                genre: {
                    value: film?.Genre,
                    Genre: film?.Genre,
                    type: "text",
                    label: "Genre",
                    errorMessage: "Enter genre!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                production: {
                    value: film?.Production,
                    Production: film?.Production,
                    type: "text",
                    label: "Production",
                    errorMessage: "Enter production!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                country: {
                    value: film?.Country,
                    Country: film?.Country,
                    type: "text",
                    label: "Country",
                    errorMessage: "Enter country!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                director: {
                    value: film?.Director,
                    Director: film?.Director,
                    type: "text",
                    label: "Director",
                    errorMessage: "Enter director!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                writer: {
                    value: film?.Writer,
                    Writer: film?.Writer,
                    type: "text",
                    label: "Writer",
                    errorMessage: "Enter writer!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                actors: {
                    value: film?.Actors,
                    Actors: film?.Actors,
                    type: "text",
                    label: "Actors",
                    errorMessage: "Enter actors!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                awards: {
                    value: film?.Awards,
                    Awards: film?.Awards,
                    type: "text",
                    label: "Awards",
                    errorMessage: "Enter awards!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
            },
        }
    } else {
        return {
            isFormValid: false,
            formControls: {
                title: {
                    value: "",
                    Title: "",
                    type: "text",
                    label: "Title",
                    errorMessage: "Enter title of film !",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                poster: {
                    value: "",
                    Poster: "",
                    type: "text",
                    label: "Poster",
                    errorMessage: "Enter poster link!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                plot: {
                    value: "",
                    Plot: "",
                    type: "textarea",
                    label: "Plot",
                    errorMessage: "Enter short plot!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 10,
                    },
                },
                rating: {
                    value: "",
                    Metascore: "",
                    type: "text",
                    label: "Rating",
                    errorMessage: "Enter rating from 1 to 100!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                year: {
                    value: "",
                    Year: "",
                    type: "text",
                    label: "Year",
                    errorMessage: "Enter year!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                runtime: {
                    value: "",
                    Runtime: "",
                    type: "text",
                    label: "Runtime",
                    errorMessage: "Enter minutes!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                genre: {
                    value: "",
                    Genre: "",
                    type: "text",
                    label: "Genre",
                    errorMessage: "Enter genre!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                production: {
                    value: "",
                    Production: "",
                    type: "text",
                    label: "Production",
                    errorMessage: "Enter production!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                country: {
                    value: "",
                    Country: "",
                    type: "text",
                    label: "Country",
                    errorMessage: "Enter country!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                director: {
                    value: "",
                    Director: "",
                    type: "text",
                    label: "Director",
                    errorMessage: "Enter director!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                writer: {
                    value: "",
                    Writer: "",
                    type: "text",
                    label: "Writer",
                    errorMessage: "Enter writer!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                actors: {
                    value: "",
                    Actors: "",
                    type: "text",
                    label: "Actors",
                    errorMessage: "Enter actor!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                awards: {
                    value: "",
                    Awards: "",
                    type: "text",
                    label: "Awards",
                    errorMessage: "Enter awards!",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
            },
        }
    }
}
