
import React from "react";
import {
  Container, Row, Col, CardTitle, CardText
} from "reactstrap";
export default function HomeContact() {
  return (
    <div className="home-contact">
      <Container>
        <Row className="body">
          <Col xs={12} xl={6} md={6} lg={6} >
            <CardTitle >Nakhon ratchasima</CardTitle>
            <CardText >
             Soi 1 Ratpracha Pak chong  30130
            </CardText>
            <span>Sixtysix หมูกะทะ  </span>
          </Col>
          <Col xs={12} xl={6} md={6} lg={6} >
            <CardTitle >Delivery</CardTitle>
            <CardText >Ready to serve food</CardText>
            <span>066-136-9555  </span>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
