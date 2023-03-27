
import { CircularProgress, Grid } from '@mui/material';


export const Loading = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor='background.main'
      sx={{ minHeight: '100vh', padding: 4, minWidth:'100vw' }}
    >

        <Grid container direction='row' justifyContent='center' >
            <CircularProgress sx={{color:'primary.main'}} />
        </Grid>
    </Grid>
  )
}

export default Loading