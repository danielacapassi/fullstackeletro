import { Row } from 'react-bootstrap';
import logo from '../Components/Produto/imagens/eletrodomesticos.png'

export default function PaginaInicial(props){
    return (
        <Row>
        <div style={{padding:"0px 50px 17vh 50px"}} className="col-sm-12 mx-auto">
            <h1><b>Seja bem vindx!</b></h1>
            <p className="lead">
                Aqui em nossa loja, <em><strong>programadores tem desconto</strong></em> nos produtos para sua casa!
            </p>
            <div className="col-lg-6 col-sm-12 mx-auto">
            <img  src={logo}/> 
            </div>
        </div>
    </Row>
    );
}
  
