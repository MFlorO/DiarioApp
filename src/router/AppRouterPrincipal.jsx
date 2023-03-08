import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "~/auth/router";
import { DiarioRoutes } from "~/diario/router";

const AppRouterPrincipal = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} /> {/* Cualquier path (por el *) que entre a auth va a mostrar las rutas de auth */}
      <Route path="/*" element={<DiarioRoutes />} />
    </Routes>
  );
};

export default AppRouterPrincipal;
