import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";


const drawerWidth = 280;

const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">

        <NavBar drawerWidth={ drawerWidth } />

        <SideBar drawerWidth={ drawerWidth } />

        <Box component='main' sx={{ flexGrow: 1, p: 1}} >
            <Toolbar />

            { children }
            
        </Box>
    </Box>
  )
}

export default JournalLayout