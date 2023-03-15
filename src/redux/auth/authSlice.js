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

            login: (state, action) => {

            },

            logout: (state, action) => {

            },

            checkingCredential: (state) => {

            }
            
  },
})

// Action creators function  --> Son funciones que se disparan. Ya estan asociadas a las acciones del reducer
export const { login, logout, checkingCredential } = authSlice.actions;
