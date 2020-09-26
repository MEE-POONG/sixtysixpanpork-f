
import React from "react";
import {
  Container, Row, Col, CardTitle, CardText
} from "reactstrap";
export default function HomeContact() {
  return (
    <div className="home-contact">
      <Container>
        <Row className="body">
          <Col xs={12} xl={4} md={4} lg={4} >
            <CardTitle >New York</CardTitle>
            <CardText >
              5th flora, 700/D kings road,green lane New York-1782 info@burger.com
            </CardText>
            <span>+10 378 483 6782</span>
          </Col>
          <Col xs={12} xl={4} md={4} lg={4} >
            <CardTitle >California</CardTitle>
            <CardText >Ready to serve food</CardText>
            <span>+10 378 483 6782</span>
          </Col>
          <Col xs={12} xl={4} md={4} lg={4} >
            <CardTitle >Stay Connected</CardTitle>
            <CardText >Ready to serve food</CardText>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
