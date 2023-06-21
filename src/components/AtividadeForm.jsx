import React from 'react'

export default function AtividadeForm(props) {
  return (
    <form className='row g-3'>
        <div className='col-md-6'>
          <label htmlFor='id' className='form-label'>Id</label>
          <input id='id' type='text' className='form-control' readOnly value={Math.max.apply(Math,props.atividades.map((item) => item.id)) + 1}/>
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
          <button onClick={props.addAtividade} type='button' className='btn btn-outline-secondary'>Adicionar atividade</button>
        </div>
      </form>
  )
}
