import styles from './Rodape.module.css';

function Rodape() {

    const nome = 'Pedro Henrique Gondim';
    const ano = new Date;

    return (
        <footer className={styles.rodape}>
            <h2>{nome} - {ano.getFullYear()}</h2>
        </footer>
    )
}

export default Rodape;