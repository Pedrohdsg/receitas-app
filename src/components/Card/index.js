import Ingrediente from 'components/Ingrediente';
import styles from './Card.module.css'
import ModoDePreparo from 'components/ModoDePreparo';

function Card( {id, titulo}){
    return (
        <>
        <div className={styles.container}>
            <h2>{titulo}</h2>
            <Ingrediente/>
            <ModoDePreparo/>
        </div>
        </>
    )
}

export default Card;