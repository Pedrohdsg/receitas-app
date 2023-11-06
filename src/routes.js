import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import FavoritasProvider from "contextos/Favoritas";
import Favoritos from "pages/favoritos";
import Incluir from "pages/incluir";
import Inicio from "pages/inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <FavoritasProvider>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/favoritas" element={<Favoritos />}></Route>
          <Route path="/incluir" element={<Incluir />}></Route>
        </Routes>
      </FavoritasProvider>

      <Rodape />
    </BrowserRouter>
  );
}
export default AppRoutes;
