import { singInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from "~/firebase";
import { checkingCredential, logout, login } from "./authSlice"

export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredential() );
        
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredential() );

        const result = await singInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))

    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredential() );

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))

    }
}


export const startLoginWithEmailPassword = ({ email, password }) =>{

    return async( dispatch ) => {

        dispatch( checkingCredential() );

        const result = await loginWithEmailPassword({ email, password });

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}


export const startLogOut = () =>{

    return async( dispatch ) => {

        await logoutFirebase();

        dispatch( login());

    }
}
