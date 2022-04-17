import { AuthConstActions, AuthInterfaceTypes, AuthState } from "../types/auth"

const initialState: AuthState = {
    token: "",
}

export const authReducer = (
    state: AuthState = initialState,
    action: AuthInterfaceTypes
) => {
    switch (action.type) {
        case AuthConstActions.AUTH_SUCCESS:
            return { ...state, token: action.payload }
        case AuthConstActions.AUTH_LOGOUT:
            return { ...state, token: null }
        default:
            return state
    }
}
