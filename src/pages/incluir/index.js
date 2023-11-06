import Receita from "components/Receita";
import styles from "./Incluir.module.css";
import Ingrediente from "components/Ingrediente";

function Incluir() {
  return (
    <>
      <form className={styles.form}>
        <Ingrediente/>
      </form>
    </>
  );
}

export default Incluir;
