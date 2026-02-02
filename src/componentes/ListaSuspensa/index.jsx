import './lista-suspesa.estilos.css'

export function ListaSuspensa({ itens }) {
  return (
    <select className="lista-suspensa-form" defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>

      {itens.map((item) => (
        <option key={item.id} value={item.id}>
          {item.nome}
        </option>
      ))}
    </select>
  );
}
 