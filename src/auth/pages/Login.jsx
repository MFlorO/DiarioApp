import GoogleIcon from '@mui/icons-material/Google';
import {Link as RouterLink} from 'react-router-dom'
import { Typography, Stack, TextField, Button, Link } from "@mui/material";
import { AuthLayOut } from '../layout';

const Login = () => {
  return (
    <AuthLayOut text='Login'>
      <form>
        <Stack backgroundColor='white' sx={{mb:3}}>
          <Stack>
            <TextField label="correo" type="email" placeholder="correo@google.com" fullWidth />
          </Stack>

          <Stack sx={{mt: 2}}>
            <TextField label="contraseña" type="password" placeholder="contraseña" fullWidth />
          </Stack>

          <Stack flexDirection={{xs:'column', md:'row'}} alignItems='center' justifyContent='space-around' sx={{mt:3}}>
            <Stack sx={{mb:2}} width>
              <Button variant='contained'>Login</Button>
            </Stack>
            <Stack sx={{mb:2, ml:{xs:0, md:2}}} width>
              <Button variant='contained' startIcon={<GoogleIcon />}>
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
