import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Receita from "components/Receita";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio() {
  return (
    <>
      <Titulo>
        <h1></h1>
      </Titulo>

      <Card id="1" titulo="Receita 1" />
      <Receita>
        
      </Receita>
    </>
  );
}

export default Inicio;
