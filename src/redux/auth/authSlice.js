import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null, 
  errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

            login: (state, {payload}) => {
            
              state.status = 'authenticated', 
              state.uid = payload?.uid,
              state.email = payload.email,
              state.displayName = payload.displayName,
              state.photoURL = payload.photoURL, 
              state.errorMessage = null
            
            },

            logout: (state, {payload}) => {

              state.status = 'not-authenticated', 
              state.uid = null,
              state.email = null,
              state.displayName = null,
              state.photoURL = null, 
              state.errorMessage = payload?.errorMessage

            },

            checkingCredential: (state) => {
              state.status = 'checking'
            }
            
  },
})

// Action creators function  --> Son funciones que se disparan. Ya estan asociadas a las acciones del reducer
export const { login, logout, checkingCredential } = authSlice.actions;
