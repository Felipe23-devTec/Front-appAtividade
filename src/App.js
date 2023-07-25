
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Atividade from './pages/atividades/Atividade';
//import 'bootswatch/dist/cosmo/bootstrap.min.css' //slate
export default function App() {
  return (
    <>
      <Route path='/atividades' component={Atividade}/>
      <Route path='/clientes' component={Cliente}/>
      <Route path='/home' component={Home}/>
    </>
    
  );
}
const Cliente = () =>(
  <div>
     <h2>Cliente</h2>
  </div>
)

const Home = () =>(
  <div>
     <h2>Home</h2>
  </div>
)