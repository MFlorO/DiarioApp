import {Link as RouterLink} from 'react-router-dom'
import { Typography, Stack, TextField, Button, Link } from "@mui/material";
import { AuthLayOut } from '../layout';

const Register = () => {
  return (
    <AuthLayOut text='Register'>
       <form>
        <Stack backgroundColor='white' sx={{mb:3}}>
          <Stack sx={{mt: 2}}>
           <TextField label="Nombre completo" type="text" placeholder="nombre completo" fullWidth />
          </Stack>

          <Stack sx={{mt: 2}}>
           <TextField label="correo " type="email" placeholder="correo@gmail.com" fullWidth />
          </Stack>

          <Stack flexDirection={{xs:'column', md:'row'}} alignItems='center' justifyContent='space-around' sx={{mt:3}}>
            <Stack sx={{mb:2}} width>
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