import { AuthConstActions, AuthInterfaceTypes, AuthState } from "../types/auth"

const initialState: AuthState = {
    token: "",
    loading: false,
}

export const authReducer = (
    state: AuthState = initialState,
    action: AuthInterfaceTypes
): AuthState => {
    switch (action.type) {
        case AuthConstActions.AUTH_SUCCESS:
            return { ...state, loading: false, token: action.payload }
        case AuthConstActions.AUTH_LOGOUT:
            return { ...state, token: "" }
        case AuthConstActions.LOADING:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}
