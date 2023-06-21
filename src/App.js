
import './App.css';
import {useState} from 'react';
import AtividadeForm from './components/AtividadeForm';
import Atividades from './components/Atividades';
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
  const[ativ,setAtiv] = useState({});
  
  function addAtividade(){
    const atividade = {
      id: Math.max.apply(Math,atividades.map((item) => item.id)) + 1,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value
    }
    //criando Hook, cria um novo objeto e atualiza com um novo adicionado no formulario com o push ele não reconhece quando é atualizado
    //Expredo Operator: para que o estado seja alterado e mostrado quando atualizado
    setAtividades([...atividades, { ...atividade }])
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
  return (
    <>
      <AtividadeForm
        atividades={atividades}
        addAtividade={addAtividade}
        ativSelecionada={ativ}
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
