import { singInWithGoogle, registerUserWithEmailPassword } from "~/firebase";
import { checkingCredential, logout, login } from "./authSlice"

export const checkingAutentication = ( email , Password ) => {

    return async (dispatch) => {
        dispatch(checkingCredential());  //El dispatch es una funcion sincróna
    }
}


export const startGoogleSignIn = (  ) => {

    return async (dispatch) => {

        dispatch(checkingCredential());  

        const {ok, uid, errorMessage, photoURL, displayName, email} = await singInWithGoogle();  //result

        if( !ok ) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, email, photoURL}))
        
    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

    return async( dispatch ) => {

        dispatch( checkingCredential() );

        const {ok, uid, errorMessage, photoURL} = await registerUserWithEmailPassword({ email, password, displayName });
       
        if ( !ok ) return dispatch( logout( {errorMessage }) );

        dispatch( login({uid, displayName, email, photoURL}))
    }
}