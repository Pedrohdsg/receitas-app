import { useState } from "react";
import styles from "./Ingrediente.module.css";
import Campo from "components/Campo";
import Selecao from "components/Select";
import ModoDePreparo from "./../ModoDePreparo/index";

const ingredientesReceita = [];
const receita = [];

const Ingrediente = ({}) => {
  const [item, setItem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [unidade, setUnidade] = useState("");
  const [modo, setModo] = useState("");

  const incluirItem = () => {
    console.log(item, quantidade, unidade);

    ingredientesReceita.push({
      ing: item,
      qtd: quantidade,
      uni: unidade,
    });

    console.log(ingredientesReceita);
  };

  const aoSalvar = () => {
    receita.push({
      ingredientesReceita,
      modo,
    });

    console.log(receita)
  };

  return (
    <>
      <form>
        <Campo
          obrigatorio={true}
          label="Ingrediente: "
          placeholder="Digite o ingrediente"
          valor={item}
          aoAlterado={(valor) => setItem(valor)}
          type="text"
        />
        <Campo
          obrigatorio={true}
          label="Qtd: "
          placeholder="Digite a quantidade"
          valor={quantidade}
          aoAlterado={(valor) => setQuantidade(valor)}
          type="number"
        />
        <Selecao
          label="un"
          placeholder="Unidade de medida"
          valor={unidade}
          aoAlterado={(valor) => setUnidade(valor)}
        />

        <input
          type="button"
          value="Incluir item"
          className={styles.btn}
          onClick={incluirItem}
        />

        <ModoDePreparo
        valor={modo}
        aoAlterado={(valor) => setModo(valor)}
        />

        <input
          type="button"
          value="Concluído"
          className={styles.btn}
          onClick={aoSalvar}
        />
      </form>
    </>
  );
};

export default Ingrediente;
