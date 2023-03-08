// import { Google } from "@mui/icons-material";
import {Link as RouterLink} from 'react-router-dom'
import { Typography, Grid, TextField, Button, Link } from "@mui/material";
import { AuthLayOut } from '../layout';

const Login = () => {
  return (
    <AuthLayOut text='Login'>
      <form>
        <Grid container backgroundColor='white'sx={{ padding:"4"}}>
          <Grid item  xs={12} sx={{ mt: 2 }}>
            <TextField label="correo" type="email" placeholder="correo@google.com" fullWidth />
          </Grid>

          <Grid item  xs={12} sx={{ mt: 2 }}>
            <TextField label="contraseña" type="password" placeholder="contraseña" fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{mb:1, mt:1}}>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                {/* <Google/> */}
                <Typography sx={{ml:1}}>Google</Typography>
              </Button>
            </Grid>

            <Grid container direction='row' justifyContent='end' sx={{mt:1}}>
              <Link component={RouterLink} to='/auth/register'>Crear una cuenta</Link>
            </Grid>
          </Grid>

        </Grid>
      </form>
      </AuthLayOut>
  );
};

export default Login;
