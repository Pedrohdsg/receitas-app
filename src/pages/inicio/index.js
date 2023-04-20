import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Ingrediente from "components/Ingrediente";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio() {
  return (
    <>
      <Cabecalho />

    <Titulo>
      <h1></h1>
    </Titulo>

<Card id='1' titulo='Receita 1'/> 
<Ingrediente />    
      <Rodape />
    </>
  );
}

export default Inicio;
