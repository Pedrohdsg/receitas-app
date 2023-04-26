const Selecao = ({ type, label, placeholder, valor, aoAlterado}) => {
  return (
    <div  type = 'text' className={`campo campo-${type}`}>
    <label>{label}</label>
    <select 
    type={type} 
    value={valor} 
    onChange={evento => aoAlterado(evento.target.value)}
    placeholder={placeholder}
    >
      <option value="g">gramas</option>
      <option value="xc">xícaras</option>
      <option value="cs">colher sopa</option>
      <option value="cc">colher chá</option>
      <option value="un">unidades</option>
      <option value="ml">mililitros(ml)</option>
      <option value="a gosto">à gosto</option>
      <option value="pitada">pitada</option>
    </select>
    </div>
  );
};

export default Selecao;