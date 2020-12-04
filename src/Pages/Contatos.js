import {
  Form,
  Button,
  ButtonGroup,
  Row,
  Col,
} from "react-bootstrap";
import emailImg from "../Components/Produto/imagens/email.jpeg";
import whatsappImg from "../Components/Produto/imagens/whatsapp.jpeg";
import { useState } from "react";

export default function Contatos(props) {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const mandarDados = async (nome, mensagem) => {
    const resposta = await fetch(
      `http://localhost/backend_fullstack_eletro/gravarForm.php?nome=${nome}&comentario=${mensagem}`
    );
    setNome("");
    setMensagem("");
  };

  return (
    <div style={{padding:"0px 50px 4vh 50px"}} className="col-sm-12 mx-auto">
      <h1><b> Nossos Contatos:</b></h1>

      <Row className="col-lg-6 col-sm-10 mx-auto">
        <img src={emailImg} />
        <Col>
          <strong>contato@fullstackeletro.com</strong>
        </Col>
        <img src={whatsappImg} />
        <Col>
          <strong>(11)99999-9999</strong>
        </Col>
      </Row>

      <br />
      <Form className="col-lg-6 col-sm-12 mx-auto">
        <h4>Deixe sua mensagem:</h4>
        <Form.Group controlId="formGroupNome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            onChange={(e) => {
              setNome(e.target.value);
            }}
            type="text"
            placeholder="Nome"
            value={nome}
          />
        </Form.Group>
        <Form.Group controlId="FormControlTextarea">
          <Form.Label>Mensagem:</Form.Label>
          <Form.Control
            onChange={(e) => {
              setMensagem(e.target.value);
            }}
            value={mensagem}
            as="textarea"
            placeholder="Nome"
            rows={6}
          />
        </Form.Group>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="danger"
            type="submit"
            size="lg"
            active
            onClick={() => {
              mandarDados(nome, mensagem);
              console.log("Enviando: " + nome + " mensagem: " + mensagem);
            }}
          >
            Enviar
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  );
}
