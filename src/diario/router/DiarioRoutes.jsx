import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages"


const DiarioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />}/>

     {/* Ruta defecto */}
      <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default DiarioRoutes