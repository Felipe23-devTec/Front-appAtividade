
import './App.css';
import {useEffect, useState} from 'react';
import AtividadeForm from './components/AtividadeForm';
import Atividades from './components/Atividades';
import api from './api/atividade';
function App() {
  //observacao : Codigo para pegar maior de uma lista e adiciona 1 no input = value={Math.max.apply(Math,atividades.map((item) => item.id)) + 1}
  const [atividades, setAtividades] = useState([]);
  const[ativ,setAtiv] = useState({id: 0});
  const pegarTodasAtividades = async () =>{
    const response = await api.get('atividade');
    return response.data;
  }
  useEffect(() =>{
    const getAtividades = async () =>{
      const todasAtividades = await pegarTodasAtividades();
      if(todasAtividades) setAtividades(todasAtividades);
    }
    getAtividades();
  },[])
  const addAtividade = async (ativ) =>{
    //criando Hook, cria um novo objeto e atualiza com um novo adicionado no formulario com o push ele não reconhece quando é atualizado
    //Expredo Operator: para que o estado seja alterado e mostrado quando atualizado
    //setAtividades([...atividades, { ...ativ, id: index}])
    const response = await api.post('atividade',ativ);
    console.log(response.data);
    setAtividades([...atividades, response.data])

  }
  
  const deletarAtividade = async (id) =>{
    if(await api.delete(`atividade/${id}`)){
      const atividadesAtualizar = atividades.filter(atividade => atividade.id !== id);
      setAtividades([...atividadesAtualizar]);
    }
    

  }
  function pegarAtividade(id){
    const atividade  = atividades.filter((at) => at.id === id);
    console.log(atividade);
    setAtiv(atividade[0])
  }
  const atualizaAtividade = async (at) => {
    const response = await api.put(`atividade/${at.id}`,at);
    console.log(response.data);
    setAtividades(atividades.map(item => item.id === response.data.id ? response.data : item))
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
