export interface IAuthConfig {
    isFormValid: boolean
    formControls: { [key: string]: IInputAuthConfig }
}
export interface IInputAuthConfig {
    value: string
    type: string
    label: string
    errorMessage: string
    valid: boolean | null
    touched: boolean
    size?: string
    validation: IValidationAuth
}
export interface IValidationAuth {
    required: boolean
    minLength?: number
    email?: boolean
}

export const getAuthConfig = (): IAuthConfig => {
    return {
        isFormValid: false,
        formControls: {
            email: {
                value: "",
                type: "email",
                label: "Email",
                errorMessage: "Введіть коректний email",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                },
            },
            password: {
                value: "",
                type: "password",
                label: "Password",
                errorMessage: "Введіть коректний password",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                },
            },
        },
    }
}
