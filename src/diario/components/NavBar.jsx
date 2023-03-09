import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, IconButton, Toolbar, Typography, Grid } from "@mui/material"

const NavBar = () => {
  return (
    <AppBar position='fixed'>
        <Toolbar>
          <IconButton><MenuIcon color='inherit' sx={{display:{sm:'none'} }} alignItems='center' justifyContent='space-between' /></IconButton>

          <Grid container directin='row' justifyContent='space-around' alignItems='center' >
            <Typography>Diario App</Typography>
            <IconButton color='white'><LogoutIcon /></IconButton>
          </Grid>

        </Toolbar>

    </AppBar>
  )
}

export default NavBar