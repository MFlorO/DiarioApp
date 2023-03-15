import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "~/auth/router";
import { DiarioRoutes } from "~/diario/router";
import { Loading } from "~/ui";
import { useCheckAuth } from "~/hooks";



const AppRouterPrincipal = () => {

  const status = useCheckAuth()

  if ( status === 'checking' ) return <Loading />
  
  return (
    <Routes>
      
        {    
          (status === 'authenticated')
           ? <Route path="/*" element={ <DiarioRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } /> 

        {/*Cualquier path (por el *) que entre a auth va a mostrar las rutas de auth */}


      {/* <Route path="/auth/*" element={<AuthRoutes />} /> 
      <Route path="/*" element={<DiarioRoutes />} /> */}

    </Routes>
  );
};

export default AppRouterPrincipal;
