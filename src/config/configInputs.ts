import { isEmpty } from "../utils/js/isObjectEmpty"
export interface IFormConfig {
    isFormValid: boolean
    formControls: { [key: string]: IInputConfig }
}
export interface IInputConfig {
    value: string
    type: string
    label: string
    errorMessage: string
    valid: boolean
    touched: boolean
    size?: string
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
                Title: {
                    value: film?.Title,
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
                Poster: {
                    value: film?.Poster,
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
                Plot: {
                    value: film?.Plot,
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
                Metascore: {
                    value: film?.Metascore,
                    type: "text",
                    label: "Rating",
                    errorMessage: "Enter rating from 1 to 100!",
                    valid: false,
                    touched: false,
                    size: "small",
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                Year: {
                    value: film?.Year,
                    type: "text",
                    label: "Year",
                    errorMessage: "Enter year!",
                    valid: false,
                    touched: false,
                    size: "small",
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                Runtime: {
                    value: film?.Runtime,
                    type: "text",
                    label: "Runtime",
                    errorMessage: "Enter minutes!",
                    valid: false,
                    touched: false,
                    size: "small",
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                Genre: {
                    value: film?.Genre,
                    type: "text",
                    label: "Genre",
                    errorMessage: "Enter genre!",
                    valid: false,
                    touched: false,
                    size: "small",
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                Production: {
                    value: film?.Production,
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
                Country: {
                    value: film?.Country,
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
                Director: {
                    value: film?.Director,
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
                Writer: {
                    value: film?.Writer,
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
                Actors: {
                    value: film?.Actors,
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
                Awards: {
                    value: film?.Awards,
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
                Title: {
                    value: "",
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
                Poster: {
                    value: "",
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
                Plot: {
                    value: "",
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
                Metascore: {
                    value: "",
                    type: "text",
                    label: "Rating",
                    errorMessage: "Enter rating from 1 to 100!",
                    valid: false,
                    touched: false,
                    size: "small",
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                Year: {
                    value: "",
                    type: "text",
                    label: "Year",
                    errorMessage: "Enter year!",
                    valid: false,
                    touched: false,
                    size: "small",
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                Runtime: {
                    value: "",
                    type: "text",
                    label: "Runtime",
                    errorMessage: "Enter minutes!",
                    valid: false,
                    touched: false,
                    size: "small",
                    validation: {
                        required: true,
                        number: true,
                    },
                },
                Genre: {
                    value: "",
                    type: "text",
                    label: "Genre",
                    errorMessage: "Enter genre!",
                    valid: false,
                    touched: false,
                    size: "small",
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                },
                Production: {
                    value: "",
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
                Country: {
                    value: "",
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
                Director: {
                    value: "",
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
                Writer: {
                    value: "",
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
                Actors: {
                    value: "",
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
                Awards: {
                    value: "",
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
