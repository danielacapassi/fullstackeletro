import { Card, CardGroup } from "react-bootstrap";
import spImg from "../Components/Produto/imagens/sp.jpg";
import rjImg from "../Components/Produto/imagens/rio.png";
import scImg from "../Components/Produto/imagens/santacatarina.png";

export default function Lojas(props) {
  return (
    <div style={{ padding: "0px 50px 5vh 50px" }} className="col-sm-12 mx-auto">
      <h1><b>Nossas Lojas:</b></h1>
      <CardGroup className="col-lg-6 col-sm-12 mx-auto">
        <Card>
          <Card.Img variant="top" src={rjImg} />
          <Card.Body>
            <Card.Title>Rio de Janeiro</Card.Title>
            <Card.Text>
              <p>Avenida Presidente Vargas, 5000</p>
              <p>10 &ordm; andar</p>
              <p>Centro</p>
              <p>(21) 3333-3333</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={spImg} />
          <Card.Body>
            <Card.Title>São Paulo</Card.Title>
            <Card.Text>
              <p>Avenida Paulista, 985</p>
              <p>3 &ordm; andar</p>
              <p>Jardins</p>
              <p>(11) 4444-4444</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={scImg} />
          <Card.Body>
            <Card.Title>Santa Catarina</Card.Title>
            <Card.Text>
              <p>Rua Major &Aacute;vila, 370</p>
              <p>Vila Mariana</p>
              <p>(41) 5555-5555</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
