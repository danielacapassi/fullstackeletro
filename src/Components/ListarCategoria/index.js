import {ListGroup} from 'react-bootstrap'


 function ListarCategoria(props) {
    

    let eventoClick = (event => {
        props.funcaoFiltro(event.target.innerText)
    })

    let listaCategorias = [{nome:"todos",quantidade:0}]

    props.listaProdutos.map(item => {
        let resultado = ""

        resultado = listaCategorias.find( categoria => 
            categoria.nome === item.categoria
        )
        
        if (resultado === undefined){
            listaCategorias.push({nome:item.categoria, quantidade:1})
        }

        else {
            resultado.quantidade = resultado.quantidade + 1;
        }

        listaCategorias[0].quantidade++;

    })

    return(<ListGroup horizontal className="col-lg-6 col-sm-10 mx-auto">         {listaCategorias && listaCategorias.map(entry => <><ListGroup.Item variant="danger" onClick={eventoClick}>{`${entry.nome}`}</ListGroup.Item><br/></>)}</ListGroup>)

 }



export default ListarCategoria