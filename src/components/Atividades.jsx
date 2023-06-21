import React from 'react'
import Atividade from './Atividade'

export default function Atividades(props) {
  return (
    <div className="mt-3">
        
          {props.atividades.map(ativ => (
              <Atividade key={ativ.id}
              ativ={ativ}
              deletarAtividade={props.deletarAtividade}/>
          ))}
        
    </div>
  )
}
