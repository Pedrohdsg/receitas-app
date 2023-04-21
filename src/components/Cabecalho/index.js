import { Link } from "react-router-dom";
import logo from "./Good Kitchen.gif";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo do Receitas-App" width={300}></img>
      </Link>
      <nav>
        <CabecalhoLink url="../">Home</CabecalhoLink>
        <CabecalhoLink url="../Incluir">Incluir receitas</CabecalhoLink>
        <CabecalhoLink url="../Favoritas">Favoritas</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
