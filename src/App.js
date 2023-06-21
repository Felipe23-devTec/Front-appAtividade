
import './App.css';
import {useEffect, useState} from 'react';
import AtividadeForm from './components/AtividadeForm';
import Atividades from './components/Atividades';

function App() {
  //observacao : Codigo para pegar maior de uma lista e adiciona 1 no input = value={Math.max.apply(Math,atividades.map((item) => item.id)) + 1}
  const [atividades, setAtividades] = useState([]);
  const[ativ,setAtiv] = useState({id: 0});
  const[index,setIndex] = useState(0);
  useEffect(() =>{
    atividades.length <= 0 ? setIndex(1) : setIndex(Math.max.apply(Math,atividades.map((item) => item.id)) + 1)
  },[atividades])
  function addAtividade(ativ){
    //criando Hook, cria um novo objeto e atualiza com um novo adicionado no formulario com o push ele não reconhece quando é atualizado
    //Expredo Operator: para que o estado seja alterado e mostrado quando atualizado
    setAtividades([...atividades, { ...ativ, id: index}])
  }
  
  function deletarAtividade(id){
    const atividadesAtualizar = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesAtualizar]);

  }
  function pegarAtividade(id){
    const atividade  = atividades.filter((at) => at.id === id);
    console.log(atividade);
    setAtiv(atividade[0])
  }
  function atualizaAtividade(at){
    setAtividades(atividades.map(item => item.id === at.id ? at : item))
    setAtiv({id: 0})
  }
  function cancelarAtividade(){
    setAtiv({id: 0})
  }
  return (
    <>
      <AtividadeForm
        atividades={atividades}
        addAtividade={addAtividade}
        ativSelecionada={ativ}
        atualizaAtividade={atualizaAtividade}
        cancelarAtividade={cancelarAtividade}
      />
      <Atividades
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      
      />
      
    </>
    
  );
}

export default App;
