import { useState, useEffect } from "react";

import Produto from "../Components/Produto";
import ListarCategoria from "../Components/ListarCategoria";

import { Container, Row, ListGroup } from "react-bootstrap";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [filtrar, setFiltrar] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  const filtro = (categoriaFiltro) => {
    console.log("Vou aplicar o filtro: " + categoriaFiltro);
    setFiltrar(categoriaFiltro);
  };

  useEffect(async () => {
    const resposta = await fetch(
      "http://localhost/backend_fullstack_eletro/getContent.php?table=produtos"
    );
    const dados = await resposta.json();
    console.log(dados);
    setProdutos(dados);
    setProdutosFiltrados(dados);
  }, []);

  useEffect(() => {
    console.log("alterou o filtro");

    let listaTempProdutosFiltrados = [];

    if (filtrar === "todos") {
      setProdutosFiltrados(produtos);
    } else {
      produtos.map((produto) => {
        if (produto.categoria === filtrar) {
          listaTempProdutosFiltrados.push(produto);
        }
      });

      setProdutosFiltrados(listaTempProdutosFiltrados);
    }
  }, [filtrar]);

  return (
    <div className="col-sm-12 mx-auto">
      <h1><b>Nossos Produtos:</b></h1>
      {produtos && (
        <ListarCategoria funcaoFiltro={filtro} listaProdutos={produtos} />
      )}
   <br/> <br/>
      <Container>
        <Row>
          {produtosFiltrados &&
            produtosFiltrados.map((item) => (
              <Produto
                key={item.idproduto}
                box_imagens={`${item.imagem}`}
                descricao={item.descricao}
                descricao2={item.preco}
                precofinal={item.precofinal}
                categoria={item.categoria}
              />
            ))}
        </Row>
      </Container>
    </div>
  );
}
