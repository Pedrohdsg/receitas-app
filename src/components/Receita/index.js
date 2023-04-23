import Ingrediente from 'components/Ingrediente';
import styles from './Receita.module.css'
import ModoDePreparo from 'components/ModoDePreparo';

function Receita(){
    return (
        <>
        <Ingrediente/>
        <ModoDePreparo/>
        </>
    )
}

export default Receita;