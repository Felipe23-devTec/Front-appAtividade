import { useState, useEffect } from 'react'

export default function AtividadeForm(props) {
    const atividadeInicial = {
        id: 0,
        titulo: '',
        prioridade: 0,
        descricao: ''
    }
    const [atividade, setAtividade] = useState(atividadeAtual());
    useEffect(() =>{
        if(props.ativSelecionada.id !== 0){
            setAtividade(props.ativSelecionada);
        }
    }, [props.ativSelecionada]);

    const inputTextHandler = (e) =>{
        const {name, value} = e.target;
        console.log(value);
        setAtividade({...atividade, [name]: value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(props.ativSelecionada.id !== 0){
            props.atualizaAtividade(atividade);
        }else{
            props.addAtividade(atividade);
        }
        setAtividade(atividadeInicial);
    }
    const handleCancelar =  (e) =>{
        e.preventDefault();
        props.cancelarAtividade();
        setAtividade(atividadeInicial);
        
    }
    //Math.max.apply(Math,props.atividades.map((item) => item.id)) + 1
    function atividadeAtual(){
        if(props.ativSelecionada.id !== 0){
            return props.ativSelecionada;
        }else{
            return atividadeInicial;
        }
    }
  return (
    <>
    
    <h1>Atividade {atividade.id !== 0 ? atividade.id : ''}</h1>
    <form className='row g-3' onSubmit={handleSubmit}>

        <div className='col-md-6'>
          <label htmlFor='titulo' className='form-label'>Título</label>
          <input id='titulo'  name='titulo' type='text' className='form-control'placeholder="Título" onChange={inputTextHandler} value={atividade.titulo}/>
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Prioridade</label>
          <select id='prioridade'  name='prioridade' className='form-select' onChange={inputTextHandler} 
          value={atividade.prioridade}>
            <option defaultValue="0">Escolha...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className='col-md-12'>
          <label htmlFor='descricao' className='form-label'>Descrição</label>
          <textarea id='descricao' name='descricao' type='text' className='form-control'placeholder="Descrição" onChange={inputTextHandler} value={atividade.descricao}/>
        </div>
        <hr/>
        <div className='col-12'>
            {
                atividade.id === 0 ?
                <button type='submit' className='btn btn-outline-secondary'>
                    <i className='fas fa-plus me-2'></i>
                    Adicionar atividade
                </button>
                :
                <>
                    <button type='submit' className='btn btn-outline-success me-3'>Salvar</button>
                    <button onClick={handleCancelar} type='button' className='btn btn-outline-warning'>Cancelar</button>
                </>
            }
          
        </div>
      </form>
      </>
  )
}
