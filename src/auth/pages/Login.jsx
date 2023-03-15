import { useDispatch } from 'react-redux';

import GoogleIcon from '@mui/icons-material/Google';
import {Link as RouterLink} from 'react-router-dom'
import { Typography, Stack, TextField, Button, Link } from "@mui/material";
import { AuthLayOut } from '../layout';
import { useForm } from '~/hooks';

import { checkingAutentication, startGoogleSignIn } from '~/redux';




const Login = () => {

  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm({
    email:'floroldani@hotmail.com',
    password: '123456'
  })

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(checkingAutentication({email, password}))
  }


  const onGoogleSignIn = (event) => {
    event.preventDefault();

    dispatch(startGoogleSignIn({email, password}))
  }


  return (
    <AuthLayOut text='Login'>
      <form onSubmit={onSubmit}>
        <Stack backgroundColor='white' sx={{mb:3}}>
          <Stack>
            <TextField label="correo" type="email" placeholder="correo@google.com" fullWidth     name="email" value={email} onChange={onInputChange} />
          </Stack>

          <Stack sx={{mt: 2}}>
            <TextField label="contraseña" type="password" placeholder="contraseña" fullWidth    name="password" value={password} onChange={onInputChange} />
          </Stack>

          <Stack flexDirection={{xs:'column', md:'row'}} alignItems='center' justifyContent='space-around' sx={{mt:3}}>
            <Stack sx={{mb:2}} width>
              <Button variant='contained' type='submit'>Login</Button>
            </Stack>
            <Stack sx={{mb:2, ml:{xs:0, md:2}}} width>
              <Button variant='contained' startIcon={<GoogleIcon />}  onClick={onGoogleSignIn}>
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
