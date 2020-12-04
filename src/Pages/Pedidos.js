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
        <>
        <h1>{`Histórico de pedidos: ${pedidos && pedidos[0].nome}`}</h1> 

        {pedidos && pedidos.map(item => (
            <>
        <ListGroup vertical className="col-lg-6 col-sm-10 mx-auto">
        <ListGroup.Item variant="danger">{`Código Pedido: ${item.idpedido}`}</ListGroup.Item>
        <ListGroup.Item variant="danger">{`Descrição: ${item.descricao}`}</ListGroup.Item>
        <ListGroup.Item variant="danger">{`Preço: ${item.precofinal}`}</ListGroup.Item>
        </ListGroup> 
        <br></br>
        </>
         ))
        }
        </>
    );
}

