
import React from "react";
import {
  Container, Row, Col, CardTitle, CardText, Card
} from "reactstrap";
export default function HomeAbout() {
  return (
    <div className="home-about">
      <Container>
        <Row className="body">
          <Col xs={12} xl={6} md={6} lg={6} >
            <img className="img-one" src={require('../../assets/img/1.png')} alt="test"/>
            <img className="img-two" src={require('../../assets/img/2.png')} alt="test"/>
          </Col>
          <Col xs={12} xl={6} md={6} lg={6} >
            <Card>
              <CardTitle className="text-header">About</CardTitle>
              <CardText className="text-srcip">Ready to serve food</CardText>
              <p className="text-detail">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
