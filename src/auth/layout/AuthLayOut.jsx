import { Typography, Stack } from "@mui/material";
import PropTypes from 'prop-types';
import {Alerts} from "../components";

const AuthLayOut = ({ children, text }) => {
  return (
    <Stack alignItems="center" spacing={0} width="100vw" minHeight="100vh" justifyContent="center" backgroundColor="primary.main" // sx={{ padding: 2 }}
    >
      <Stack boxShadow={1} justifyContent="space-around" backgroundColor='white' borderRadius={2} sx={{padding:3, width:{xs:'25rem', md:'35rem'}, height:'30rem' }}>
        <Typography textAlign='center' variant="h5" >{text}</Typography>
        {children}
        <Alerts />
      </Stack>
    </Stack>
  );
};

export default AuthLayOut;


AuthLayOut.propTypes = {
    text: PropTypes.string.isRequired
  };