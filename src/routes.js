import Favoritos from "pages/favoritos";
import Incluir from "pages/incluir";
import Inicio from "pages/inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Favoritas" element={<Favoritos />}></Route>
        <Route path="/Incluir" element={<Incluir />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;