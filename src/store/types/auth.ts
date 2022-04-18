export interface AuthState {
    token: string //! token type
    loading: boolean
}

export enum AuthConstActions {
    AUTH_SUCCESS = "AUTH_SUCCESS",
    AUTH_LOGOUT = "AUTH_LOGOUT",
    LOADING = "LOADING",
}

export interface AuthSuccess {
    type: AuthConstActions.AUTH_SUCCESS
    payload: string //! token type
}

interface AuthLogout {
    type: AuthConstActions.AUTH_LOGOUT
}

interface Loading {
    type: AuthConstActions.LOADING
    payload: boolean
}

export type AuthInterfaceTypes = AuthSuccess | AuthLogout | Loading
