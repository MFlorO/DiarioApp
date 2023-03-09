import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, IconButton, Toolbar, Typography, Grid } from "@mui/material"


const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
         }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography>Diario App</Typography>
            <IconButton><LogoutIcon sx={{color:'white'}}/></IconButton>
            </Grid>

        </Toolbar>
    </AppBar>
  )
}

export default NavBar;