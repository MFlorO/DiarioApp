import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GoogleIcon from '@mui/icons-material/Google';
import {Link as RouterLink} from 'react-router-dom'
import { Typography, Stack, TextField, Button, Link } from "@mui/material";
import { AuthLayOut } from '../layout';
import { useForm } from '~/hooks';

import { startLoginWithEmailPassword, startGoogleSignIn } from '~/redux';
import { validateLogin } from './functions';


const formData = {
  email:'',
  password: ''
}


const Login = () => {

  const dispatch = useDispatch()

  const { status } = useSelector( state => state.auth)
  const isAuthenticated = useMemo( () => status === 'checking', [status])  //Memorizo el valor status porque quiero que se renderice SOLO cuando cambia

  const { email, password, onInputChange, errorFormValid, onResetForm } = useForm(formData, validateLogin)

  const formValid = () => {
    if (Object.keys(errorFormValid).length > 0) return true

    return false
  }

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({email, password}));
    onResetForm();
  }

  const onGoogleSignIn = (event) => {
    event.preventDefault();
    dispatch(startGoogleSignIn({email, password}));
    onResetForm();
  }

  return (
    <AuthLayOut text='Login'>
      <form onSubmit={onSubmit}>
        <Stack backgroundColor='white' sx={{mb:3}}>
          <Stack>
            <TextField 
            label="correo" 
            type="email" 
            placeholder="correo@google.com" 
            fullWidth  
            name="email" 
            value={email} 
            onChange={onInputChange} 
            error={formValid()}  
            helperText={errorFormValid.email}
            />
          </Stack>

          <Stack sx={{mt: 2}}>
            <TextField 
            label="contraseña" 
            type="password" 
            placeholder="contraseña" 
            fullWidth name="password" 
            value={password} 
            onChange={onInputChange} 
            error={formValid()} 
            helperText={errorFormValid.password}
            />
          </Stack>

          <Stack flexDirection={{xs:'column', md:'row'}} alignItems='center' justifyContent='space-around' sx={{mt:3}}>
            <Stack sx={{mb:2}} width>
              <Button variant='contained' type='submit' disabled={isAuthenticated || formValid()}>Login</Button>
            </Stack>
            <Stack sx={{mb:2, ml:{xs:0, md:2}}} width>
              <Button variant='contained' startIcon={<GoogleIcon />} onClick={onGoogleSignIn} disabled={isAuthenticated || formValid()}>
                <Typography>Google</Typography>
              </Button>
            </Stack>
          </Stack>

          <Stack alignItems={{xs:'center', md:'end'}} sx={{mt:0.5}}>
              <Link component={RouterLink} to='/auth/register'>Crear una cuenta</Link>
          </Stack>
        </Stack>
      </form>
      </AuthLayOut>
  );
};

export default Login;
