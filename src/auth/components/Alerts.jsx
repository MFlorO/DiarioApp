import { Alert } from '@mui/material'
import { useSelector } from 'react-redux'

const Alerts = () => {

  const { errorMessage } = useSelector( state => state.auth)

  return (
    <>
      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
    </>
  )
}

export default Alerts