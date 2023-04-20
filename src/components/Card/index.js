import styles from './Card.module.css'

function Card( {id, titulo}){
    return (
        <>
        <div className={styles.container}>
            <h2>{titulo}</h2>
        </div>
        </>
    )
}

export default Card;