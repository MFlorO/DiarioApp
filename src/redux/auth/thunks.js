import { singInWithGoogle } from "~/firebase";
import { checkingCredential, logout, login } from "./authSlice"

export const checkingAutentication = ( email , Password ) => {
    return async (dispatch) => {
        dispatch(checkingCredential());  //El dispatch es una funcion sincróna?
    }
}


export const startGoogleSignIn = (  ) => {
    return async (dispatch) => {
        dispatch(checkingCredential());  

        const result = await singInWithGoogle();

        console.log(result)

        if( !result.ok ) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
        
    }
}