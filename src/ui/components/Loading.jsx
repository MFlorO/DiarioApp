
import { CircularProgress, Grid } from '@mui/material';


export const Loading = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4, minWidth:'100vw' }}
    >

        <Grid container direction='row' justifyContent='center' >
            <CircularProgress color='info' />
        </Grid>
    </Grid>
  )
}

export default Loading