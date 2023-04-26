import styles from "./ModoDePreparo.module.css";

const ModoDePreparo = ({ modoPrep, aoAlterado, valor }) => {
  return (
    <>
      <form className={styles.form}>
        <h2>Modo de preparo</h2>
        <input 
        className={styles.texto} 
        text={modoPrep}
        value={valor} 
        onChange={evento => aoAlterado(evento.target.value)}
        />
      </form>
    </>
  );
}

export default ModoDePreparo;
