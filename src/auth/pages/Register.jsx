import { useDispatch } from 'react-redux';
import {Link as RouterLink} from 'react-router-dom'
import { Typography, Stack, TextField, Button, Link } from "@mui/material";
import { AuthLayOut } from '../layout';
import {validateRegister} from './functions';
import { useForm } from '~/hooks/useForm';
import { startCreatingUserWithEmailPassword } from '~/redux';


const formData = {
  displayName: "",
  email: "",
  password: ""
}



const Register = () => {


  const dispatch = useDispatch()

  const { displayName, email, password, onInputChange, errorFormValid, onResetForm } = useForm(formData, validateRegister)
  
  const formValid = () => {
    if (Object.keys(errorFormValid).length > 0) return true

    return false
  }

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startCreatingUserWithEmailPassword({displayName, email, password}));
    onResetForm();
  }

  return (
    <AuthLayOut text='Register'>
       <form onSubmit={onSubmit}>
        <Stack backgroundColor='#422631' sx={{mb:3}}>
          <Stack sx={{mt: 2}}>
           <TextField 
           label="Nombre completo" 
           type="text" 
           placeholder="Nombre Completo" 
           fullWidth
           name="displayName" 
           value={displayName} 
           onChange={onInputChange} 
           error={formValid()}  
           helperText={errorFormValid.displayName}
            />
          </Stack>

          <Stack sx={{mt: 2}}>
           <TextField 
           label="correo " 
           type="email" 
           placeholder="correo@gmail.com" 
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
            fullWidth 
            name="password" 
            value={password} 
            onChange={onInputChange} 
            error={formValid()} 
            helperText={errorFormValid.password}
            />
          </Stack>

          <Stack flexDirection={{xs:'column', md:'row'}} alignItems='center' justifyContent='space-around' sx={{mt:3}}>
            <Stack sx={{mb:2}} width>
              <Button variant='contained' type='submit' disabled={formValid()}>Crear cuenta</Button>
              </Stack>
          </Stack>

          <Stack direction='row' justifyContent='center' sx={{mt:0.5}}>
            <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} to='/auth/login'>Ingresar</Link>
          </Stack>
        </Stack>
      </form>
      </AuthLayOut>
  )
}

export default Register