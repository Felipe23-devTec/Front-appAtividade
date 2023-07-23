import React from 'react'
import AtividadeItem from './AtividadeItem'

export default function Atividades(props) {
  return (
    <div className="mt-3">
        
          {props.atividades.map(ativ => (
              <AtividadeItem key={ativ.id}
              ativ={ativ}
              handleConfirmModal={props.handleConfirmModal}
              pegarAtividade={props.pegarAtividade}/>
          ))}
        
    </div>
  )
}
