
import './App.css';
import {useState} from 'react';
const initialState = [
  {
    id: 1,
    descricao: "Descansar"
  },
  {
    id: 2,
    descricao: "Jogar futbol"
  }
]
function App() {
  const [atividades, setAtividades] = useState(initialState);
  
  function addAtividade(){
    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value
    }
    //criando Hook, cria um novo objeto e atualiza com um novo adicionado no formulario
    setAtividades([...atividades, { ...atividade }])
  }
  return (
    <>
      <form>
        <input id='id' type='text'/>
        <input id='descricao' type='text'/>
        <button onClick={addAtividade} type='button'>Adicionar atividade</button>
      </form>
      <div className="mt-3">
        <ul className="list-group">
            {atividades.map(ativ => (
              <li key={ativ.id} className="list-group-item">{ativ.id} - {ativ.descricao} </li>
            ))
            }
        </ul>
        
      </div>
    </>
    
  );
}

export default App;
