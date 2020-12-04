import {useState, useEffect} from 'react';
import {ListGroup} from 'react-bootstrap';


export default function Pedidos(){

const [pedidos, setPedidos] = useState("")

let idCliente = 3;

    useEffect(async ()=> {
        const resposta = await fetch(`http://localhost/backend_fullstack_eletro/pegarPedidos.php?id=${idCliente}`)
        const dados = await resposta.json()
        console.log(dados)
        setPedidos(dados);
    }, []);

    return (
        <div className="col-sm-12 mx-auto">
        <h1><b>{`Histórico de Pedidos do Cliente: ${pedidos && pedidos[0].nome}`}</b></h1> 
        

        {pedidos && pedidos.map(item => (
            <div>
        <ListGroup vertical className="col-lg-6 col-sm-10 mx-auto">
        <ListGroup.Item variant="danger">{`Código do Pedido: ${item.idpedido}`}</ListGroup.Item>
        <ListGroup.Item variant="danger">{`Data do Pedido: ${item.data}`}</ListGroup.Item>
        <ListGroup.Item variant="danger">{`Descrição do Produto: ${item.descricao}`}</ListGroup.Item>
        <ListGroup.Item variant="danger">{`Preço: ${item.precofinal}`}</ListGroup.Item>

        </ListGroup> 
        <br></br>
        </div>
         ))
        }
        </div>
    );
}

