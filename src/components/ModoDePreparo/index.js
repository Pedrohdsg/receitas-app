import styles from "./ModoDePreparo.module.css";

function ModoDePreparo({ modoPrep }) {
  return (
    <>
      <form className={styles.form}>
        <h2>Modo de preparo</h2>
        <input className={styles.texto} text={modoPrep}/>
      </form>
    </>
  );
}

export default ModoDePreparo;
