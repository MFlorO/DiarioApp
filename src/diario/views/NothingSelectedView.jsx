import { Grid, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const NothingSelectedView = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '89vh', width:'81vw' , backgroundColor: 'primary.main', borderRadius: 3 }}
    >
        <Grid>
            <StarIcon sx={{ fontSize: 100, color: 'white' }} />
        </Grid>
        <Grid >
            <Typography color="white" variant='h5'>Selecciona o crea una entrada</Typography>
        </Grid>
    </Stack>
  )
}

export default NothingSelectedView;