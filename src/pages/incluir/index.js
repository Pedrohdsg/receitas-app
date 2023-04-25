import Receita from "components/Receita";
import styles from "./Incluir.module.css";

function Incluir() {
  return (
    <>
      <form className={styles.form}>
        <Receita />
      </form>
    </>
  );
}

export default Incluir;
