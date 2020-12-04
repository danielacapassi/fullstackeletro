import Menu from './Components/Menu/'
import Rotas from './rotas' ;
import Rodape from './Components/Rodape/';

import{ BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css'

function App() {
  return (
    <BrowserRouter> 
     <div className="App">
      <header>
      <Menu/>
      </header>
      <main> 
        <container fluid>
          <Rotas />
        </container>
      </main>
      <footer>
        <Rodape />
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
