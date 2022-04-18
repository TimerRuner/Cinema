import axios from "axios"
import { Dispatch } from "react"
import {
    AuthConstActions,
    AuthInterfaceTypes,
    AuthSuccess,
} from "../types/auth"
import { firebaseConfig } from "../../config/firebase"
import { AlertAction, AlertActionTypes } from "../types/alert"

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

            const expirationData = new Date(
                new Date().getTime() + data.expiresIn * 1000
            )
            localStorage.setItem("token", data.idToken)
            localStorage.setItem("userId", data.localId)
            localStorage.setItem(
                "expirationData",
                JSON.stringify(expirationData)
            )
            dispath(authSuccess(data.idToken))

            autoLogout(String(data.expiresIn))
        } catch (error) {
            dispath({
                type: AlertAction.SHOW_ALERT,
                payload: { text: String(error), type: "error" },
            })
        }
    }
}
export const logout = (): AuthInterfaceTypes => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("expirationDate")
    return {
        type: AuthConstActions.AUTH_LOGOUT,
    }
}
export const authSuccess = (token: string): AuthSuccess => ({
    type: AuthConstActions.AUTH_SUCCESS,
    payload: token,
})

export const loading = (status: boolean) => ({
    type: AuthConstActions.LOADING,
    payload: status,
})

export const autoLogout = (time: string) => {
    return (dispatch: Dispatch<AuthInterfaceTypes>) => {
        setTimeout(() => {
            dispatch(logout())
        }, parseInt(time) * 1000)
    }
}

export const autoLogin = () => {
    return (dispath: Dispatch<AuthInterfaceTypes>) => {
        const token = localStorage.getItem("token")

        if (!token) {
            dispath(logout())
        } else {
            const expirationDate = new Date(
                JSON.parse(localStorage.getItem("expirationData") || "")
            )

            if (expirationDate <= new Date()) {
                dispath(logout())
            } else {
                dispath(authSuccess(token))

                const time =
                    (expirationDate.getTime() - new Date().getTime()) / 1000
                autoLogout(String(time))
            }
        }
    }
}
