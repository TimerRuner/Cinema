import axios from "axios"
import { Dispatch } from "react"
import { AuthInterfaceTypes } from "../types/auth"
import { firebaseConfig } from "../../config/firebase"
import { AlertAction, AlertActionTypes } from "../types/alert"

let time: NodeJS.Timeout | null = null

export const auth = (email: string, password: string, isLogin: boolean) => {
    return async (dispath: Dispatch<AuthInterfaceTypes | AlertActionTypes>) => {
        try {
            const authData = {
                email,
                password,
                returnSecureToken: true,
            }
            let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`
            if (isLogin) {
                url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`
            }

            const response = await axios.post(url, authData)
            const data = response.data
            console.log(response)
        } catch (error) {
            dispath({
                type: AlertAction.SHOW_ALERT,
                payload: { text: String(error), type: "error" },
            })
        }
    }
}
