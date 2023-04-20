import styles from './Ingrediente.module.css'

function Ingrediente () {
    return (
        <>
        <input type='text' className={styles.text}/>
        <input type='number' className={styles.number}/>
        <select className={styles.select}>
            <option value="g">gramas</option>
            <option value="xc">xícaras</option>
            <option value="cs">colher sopa</option>
            <option value="cc">colher chá</option>
            <option value="un">unidades</option>
            <option value="ml">mililitros(ml)</option>
            <option value="a gosto">à gosto</option>
            <option value="pitada">pitada</option>
        </select>
        </>
    )
}

export default Ingrediente;