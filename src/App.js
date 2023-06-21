
import './App.css';
import {useState} from 'react';
const initialState = [
  {
    id: 1,
    prioridade: "2",
    titulo: "titulo 1",
    descricao: "Descansar"
  },
  {
    id: 2,
    prioridade: "2",
    titulo: "titulo 2",
    descricao: "Jogar futbol"
  }
]
function App() {
  //observacao : Codigo para pegar maior de uma lista e adiciona 1 no input = value={Math.max.apply(Math,atividades.map((item) => item.id)) + 1}
  const [atividades, setAtividades] = useState(initialState);
  
  function addAtividade(){
    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value
    }
    //criando Hook, cria um novo objeto e atualiza com um novo adicionado no formulario com o push ele não reconhece quando é atualizado
    //Expredo Operator: para que o estado seja alterado e mostrado quando atualizado
    setAtividades([...atividades, { ...atividade }])
  }
  function prioridade(param){
    switch (param){
      case '1':
        return 'Baixa'
      case '2':
        return 'Normal'
      case '3':
        return 'Alta'
      default:
        return 'Não definido'
        
    }
  }
  function prioridadeStyle(param, icone){
    switch (param){
      case '1':
        return icone ? 'smile' : 'success'
      case '2':
        return icone ? 'meh' : 'dark'
      case '3':
        return icone ? 'frown' : 'warning'
      default:
        return 'Não definido'
        
    }
  }
  function deletarAtividade(id){
    const atividadesAtualizar = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesAtualizar]);

  }
  return (
    <>
      <form className='row g-3'>
        <div className='col-md-6'>
          <label htmlFor='id' className='form-label'>Id</label>
          <input id='id' type='text' className='form-control' readOnly value={Math.max.apply(Math,atividades.map((item) => item.id)) + 1}/>
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Prioridade</label>
          <select id='prioridade' className='form-select'>
            <option defaultValue="0">Escolha...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>

        </div>
        <div className='col-md-6'>
          <label htmlFor='titulo' className='form-label'>Título</label>
          <input id='titulo' type='text' className='form-control'placeholder="Título"/>
        </div>
        <div className='col-md-6'>
          <label htmlFor='descricao' className='form-label'>Descrição</label>
          <input id='descricao' type='text' className='form-control'placeholder="Descrição"/>
        </div>
        <hr/>
        <div className='col-12'>
          <button onClick={addAtividade} type='button' className='btn btn-outline-secondary'>Adicionar atividade</button>
        </div>
      </form>
      <div className="mt-3">
        
          {atividades.map(ativ => (
              <div key={ativ.id} className={"card mb-2 shadow-sm rounded-3 border-" + prioridadeStyle(ativ.prioridade)}>
      
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <h5><span className="badge rounded-pill bg-primary me-2">{ativ.id}</span>- {ativ.titulo}</h5>
                    <h6>Prioridade: 
                      <span className={'ms-1 text-'+prioridadeStyle(ativ.prioridade)}>
                          <i className={'me-1 far fa-'+ prioridadeStyle(ativ.prioridade,true)}></i> 
                            {prioridade(ativ.prioridade)}
                      </span>
                    </h6>
                  </div>
                  <p className="card-text">{ativ.descricao} </p>
                  <div className='d-flex justify-content-end border-top pt-3'>
                    <button className='btn btn-outline-primary me-4'>
                      <i className='fas fa-pen me-2'></i>
                      Editar
                    </button>
                    <button className='btn btn-outline-danger' onClick={() => deletarAtividade(ativ.id)}>
                      <i className='fas fa-trash me-2'></i>
                      Deletar
                    </button>
                  </div>
                  
                </div>
              </div>
          ))}
        
      </div>
    </>
    
  );
}

export default App;
