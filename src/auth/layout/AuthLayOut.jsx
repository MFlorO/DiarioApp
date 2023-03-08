import { Typography, Grid } from "@mui/material";
import PropTypes from 'prop-types';

const AuthLayOut = ({ children, text }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={0}
      width="100vw"
      minHeight="100vh"
      justifyContent="center"
      sx={{ padding: "4" }}
      backgroundColor="primary.main"
    >
      <Grid item boxShadow={1} xs={3} backgroundColor='white' borderRadius={2} sx={{padding:3, width:{md:'30rem'} }}>
        <Typography variant="h5" sx={{ mb: 1 }}>{text}</Typography>
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayOut;


AuthLayOut.propTypes = {
    text: PropTypes.string.isRequired
  };