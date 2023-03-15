import { checkingCredential } from "./authSlice"

export const checkingAutentication = ( email , Password ) => {
    return async (dispatch) => {
        dispatch(checkingCredential());  //El dispatch es una funcion sincróna?
    }
}


export const startGoogleSignIn = (  ) => {
    return async (dispatch) => {
        dispatch(checkingCredential());  
    }
}