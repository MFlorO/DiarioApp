import { Navigate, Route, Routes } from "react-router-dom"
import { DiarioPage } from "../pages"


const DiarioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DiarioPage />}/>

     {/* Ruta defecto */}
      <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default DiarioRoutes