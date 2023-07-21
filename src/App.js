
import './App.css';
import {useEffect, useState} from 'react';
import AtividadeForm from './components/AtividadeForm';
import Atividades from './components/Atividades';
import api from './api/atividade';
import {Button, Modal} from 'react-bootstrap';
function App() {
  //codigo para exibicao de modal
  const [showAtividadeModal, setShowAtividadeModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);

  const handleAtividadeModal = () => setShowAtividadeModal(!showAtividadeModal);

  const handleConfirmModal = (id) => {
    console.log(id)
    if(id !== 0 && id !== undefined){
      const atividade  = atividades.filter((at) => at.id === id);
      console.log(atividade);
      setAtiv(atividade[0])
      console.log("Chegou aqui")
    }else{
      setAtiv({id: 0})
      console.log("Chegou aqui 2")
    }
    setShowConfirmDeleteModal(!showConfirmDeleteModal);
  }

  
  
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
    handleAtividadeModal();

  }
  const NovaAtividade = () =>{
    handleAtividadeModal();
    setAtiv({id: 0})
    
  }
  
  const deletarAtividade = async (id) =>{
    handleConfirmModal(0);
    if(await api.delete(`atividade/${id}`)){
      const atividadesAtualizar = atividades.filter(atividade => atividade.id !== id);
      setAtividades([...atividadesAtualizar]);
    }
    

  }
  function pegarAtividade(id){
    const atividade  = atividades.filter((at) => at.id === id);
    console.log(atividade);
    setAtiv(atividade[0])
    handleAtividadeModal();

  }
  const atualizaAtividade = async (at) => {
    handleAtividadeModal();
    const response = await api.put(`atividade/${at.id}`,at);
    console.log(response.data);
    setAtividades(atividades.map(item => item.id === response.data.id ? response.data : item))
    setAtiv({id: 0})
    
  }
  function cancelarAtividade(){
    handleAtividadeModal();
    setAtiv({id: 0})
    
  }
  return (
    <>
      <div className='d-flex justify-content-between align-items-end border-bottom border-2 mb-3 mt-3 pb-3'>
        <h1>Atividades</h1>
        <Button variant="success" onClick={NovaAtividade}>
          <i className='fas fa-plus'></i>
        </Button>
      </div>
      <Atividades
        atividades={atividades}
        handleConfirmModal={handleConfirmModal}
        pegarAtividade={pegarAtividade}
      
      />
      <Modal
        show={showAtividadeModal}
        onHide={handleAtividadeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{ativ.id !== 0 ? "Editar Atividade " + ativ.id : "Adicionar Atividade"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AtividadeForm
          atividades={atividades}
          addAtividade={addAtividade}
          //Passo a atividade selecionada para o form pela funcao pegar atividade
          ativSelecionada={ativ}
          atualizaAtividade={atualizaAtividade}
          cancelarAtividade={cancelarAtividade}
          />
        </Modal.Body>
      </Modal>
      <Modal
        size='sm'
        show={showConfirmDeleteModal}
        onHide={handleConfirmModal}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Excluindo a atividade{' '} {ativ.id !== 0 ? ativ.id : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja excluir a atividade? <br></br>
          <b>ID: {ativ.id} - TÍTULO: {ativ.titulo}</b>

        </Modal.Body>
        <Modal.Footer>
            <button className='btn btn-outline-success me-2' onClick={() => deletarAtividade(ativ.id)}>
               <i className='fas fa-times me-2'></i>
               Sim
            </button>
            <button className='btn btn-outline-danger me-2' onClick={() => handleConfirmModal(0)}>
               <i className='fas fa-times me-2'></i>
               Não
            </button>
        </Modal.Footer>
      </Modal>
    </>
    
  );
}

export default App;
