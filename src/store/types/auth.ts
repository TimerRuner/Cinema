export interface AuthState {
    token: string //! token type
}

export enum AuthConstActions {
    AUTH_SUCCESS = "AUTH_SUCCESS",
    AUTH_LOGOUT = "AUTH_LOGOUT",
}

interface AuthSuccess {
    type: AuthConstActions.AUTH_SUCCESS
    payload: string //! token type
}

interface AuthLogout {
    type: AuthConstActions.AUTH_LOGOUT
}

export type AuthInterfaceTypes = AuthSuccess | AuthLogout
