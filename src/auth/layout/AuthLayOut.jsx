import { Typography, Stack } from "@mui/material";
import PropTypes from 'prop-types';
import {Alerts} from "../components";

const AuthLayOut = ({ children, text }) => {
  return (
    <Stack alignItems="center" width="100vw" minHeight="100vh" justifyContent="center" backgroundColor="background.main" 
    className="animate__animated animate__fadeIn animate__faster"
    >
      <Stack boxShadow={2} justifyContent="space-around" backgroundColor='#422631' borderRadius={2} sx={{padding:3, width:{xs:'25rem', md:'35rem'}, height:'30rem' }}>
        <Typography textAlign='center' variant="h4" color={'primary.main'}>{text}</Typography>
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