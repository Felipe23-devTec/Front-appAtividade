
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
    //criando Hook, cria um novo objeto e atualiza com um novo adicionado no formulario com o push ele não reconhece quando é atualizado
    //Expredo Operator: para que o estado seja alterado e mostrado quando atualizado
    setAtividades([...atividades, { ...atividade }])
  }
  return (
    <>
      <form className='row g-3'>
        <div className='col-md-6'>
          <label for='id' className='form-label' placeholder="Id">Id</label>
          <input id='id' type='text' className='form-control'/>
        </div>
        <div className='col-md-6'>
          <label for='id' className='form-label'>Descrição</label>
          <input id='descricao' type='text' className='form-control'placeholder="Descrição"/>
        </div>
        <hr/>
        <div className='col-12'>
          <button onClick={addAtividade} type='button' className='btn btn-outline-secondary'>Adicionar atividade</button>
        </div>
      </form>
      <div className="mt-3">
        
          {atividades.map(ativ => (
              <div key={ativ.id} class="card mb-2 shadow-sm">
      
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <h5><span className="badge rounded-pill bg-primary me-2">{ativ.id}</span>- Titulo</h5>
                    <h6>Prioridade: 
                      <span className='ms-1 text-black'>
                          <i className='me-1 far fa-smile'></i> 
                            Normal
                      </span>
                    </h6>
                  </div>
                  <p className="card-text">{ativ.descricao} </p>
                  
                </div>
              </div>
          ))}
        
      </div>
    </>
    
  );
}

export default App;
