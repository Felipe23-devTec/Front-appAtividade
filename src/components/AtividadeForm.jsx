import React, { useState } from 'react'

export default function AtividadeForm(props) {
    const [atividade, setAtividade] = useState({})
    const inputTextHandler = (e) =>{
        const {name, value} = e.target;
        console.log(value);
        setAtividade({...atividade, [name]: value})
    }
    //Math.max.apply(Math,props.atividades.map((item) => item.id)) + 1
  return (
    <form className='row g-3'>

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
          <label htmlFor='descricao'  name='descricao' className='form-label'>Descrição</label>
          <textarea id='descricao' type='text' className='form-control'placeholder="Descrição" onChange={inputTextHandler} value={atividade.descricao}/>
        </div>
        <hr/>
        <div className='col-12'>
          <button onClick={props.addAtividade} type='button' className='btn btn-outline-secondary'>Adicionar atividade</button>
        </div>
      </form>
  )
}
