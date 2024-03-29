import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { useSelector } from 'react-redux';

const SideBar = ({ drawerWidth = 240 }) => {

const { displayName } = useSelector( state => state.auth)

return (
 <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
    <Drawer variant='permanent' open sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }} >
        <Toolbar><Typography variant='h6' noWrap component='div'>{displayName}</Typography></Toolbar>
        <Divider />
  
        <List>
         {['Enero','Febrero','Marzo','Abril'].map( text => (
            <ListItem key={ text } disablePadding  sx={{ "&:hover": { backgroundColor: "primary.main" }}}>
                <ListItemButton>
                    <ListItemIcon><TurnedInNotIcon /></ListItemIcon>
                    <Grid container>
                        <ListItemText primary={ text } />
                        <ListItemText secondary={ 'Exercitation cillum irure elit consectetur.' } />
                    </Grid>
                    </ListItemButton>
                </ListItem> ))
        }
        </List>
  
    </Drawer>
  </Box>
 )
}

export default SideBar;