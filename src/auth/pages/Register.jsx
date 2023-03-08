import {Link as RouterLink} from 'react-router-dom'
import { Typography, Grid, TextField, Button, Link } from "@mui/material";
import { AuthLayOut } from '../layout';

const Register = () => {
  return (
    <AuthLayOut text='Register'>
      <form>
        <Grid container backgroundColor='white'sx={{ padding:"4"}}>
          <Grid item  xs={12} sx={{ mt: 2 }}>
            <TextField label="Nombre completo" type="text" placeholder="nombre completo" fullWidth />
          </Grid>

          <Grid item  xs={12} sx={{ mt: 2 }}>
            <TextField label="correo " type="email" placeholder="correo@gmail.com" fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{mb:1, mt:1}}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>Crear Cuenta</Button>
            </Grid>

            <Grid container direction='row' justifyContent='end' sx={{mt:1}}>
              <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} to='/auth/login'>Ingresar</Link>
            </Grid>
          </Grid>

        </Grid>
      </form>
      </AuthLayOut>
  )
}

export default Register