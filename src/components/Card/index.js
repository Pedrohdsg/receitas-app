import styles from './Card.module.css'

function Card(){
    return (
        <>
        <input className={styles.nome} placeholder='Insira o nome da receita' required/>
        </>
    )
}

export default Card;