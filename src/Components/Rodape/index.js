import { } from 'react-bootstrap';
import React from 'react'
import './rodape.css';
import pagamento from '../Produto/imagens/formaspagamento.jpeg'

function Rodape (props) {
    return (
 
 <div style={ { display:"flex", flexDirection:"column"}} id="rodape">
    <div>
    <h5 >Formas de pagamento:</h5> 
    </div>
    <div>
      <img width="200px" src={pagamento} alt="Formas de pagamento" />
    </div>
    <div>
    <p>&copy; Desenvolvedor: Daniela Capassi - Recode Pro</p>
    </div>

  </div>
    );
}


export default Rodape;