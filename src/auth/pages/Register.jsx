import {Link as RouterLink} from 'react-router-dom'
import { Typography, Stack, TextField, Button, Link } from "@mui/material";
import { AuthLayOut } from '../layout';
import {validateRegister} from './functions';
import { useForm } from '~/hooks/useForm';


const formData = {
  name: "",
  email: ""
}



const Register = () => {


  const { name, email, onInputChange, errorFormValid, onResetForm } = useForm(formData, validateRegister)
  
  const formValid = () => {
    if (Object.keys(errorFormValid).length > 0) return true

    return false
  }

  console.log(errorFormValid)

  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(checkingAutentication({email, password}));
    onResetForm();
  }

  return (
    <AuthLayOut text='Register'>
       <form onSubmit={onSubmit}>
        <Stack backgroundColor='white' sx={{mb:3}}>
          <Stack sx={{mt: 2}}>
           <TextField 
           label="Nombre completo" 
           type="text" 
           placeholder="Nombre Completo" 
           fullWidth
           name="name" 
           value={name} 
           onChange={onInputChange} 
           error={formValid()}  
           helperText={errorFormValid.name}
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

          <Stack flexDirection={{xs:'column', md:'row'}} alignItems='center' justifyContent='space-around' sx={{mt:3}}>
            <Stack sx={{mb:2}} width type='submit' disabled={formValid()}>
              <Button variant='contained'>Crear cuenta</Button>
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