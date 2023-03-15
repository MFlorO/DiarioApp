import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "~/auth/router";
import { DiarioRoutes } from "~/diario/router";
import { Loading } from "~/ui";
import { FirebaseAuth } from "~/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { logout, login } from "~/redux";




const AppRouterPrincipal = () => {

  const dispatch = useDispatch()


  const { status } = useSelector( state => state.auth)

  useEffect(() => {

    onAuthStateChanged(FirebaseAuth, async(user) => {
      if( !user ) return dispatch(logout());

      const {uid, email, photoURL, displayName} = user

      dispatch(login({uid, email, photoURL, displayName}))
    })

  }, [])
  

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
