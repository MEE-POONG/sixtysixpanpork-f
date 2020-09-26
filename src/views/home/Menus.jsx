
import React from "react";
import {
  Container, Row, Col, CardTitle, CardText, CardBody, Media, Button
} from "reactstrap";
export default function Meuns() {
  return (
    <div className="home-menu">

      <Container>
        <div className="header">
          <CardBody>
            <CardTitle className="text-header">PanPork Menu</CardTitle>
            <CardText className="text-detail">Ready to serve food</CardText>
          </CardBody>
        </div>
        <Row className="body">
          <Col xs={12} xl={6} md={6} lg={6} >
            <Media className="pb-5">
              <Media left>
                <Media object src={require("assets/img/menu1.jpg")} alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>
                  Media heading
                </Media>
                  Great way to make your business appear trust and relevant.
                <p>199 $</p>
              </Media>
            </Media>
          </Col>
          <Col xs={12} xl={6} md={6} lg={6} >
            <Media className="pb-5">
              <Media left>
                <Media object src={require("assets/img/menu1.jpg")} alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>
                  Media heading
                </Media>
                  Great way to make your business appear trust and relevant.
                  <p>199 $</p>
              </Media>
            </Media>
          </Col>
          <Col xs={12} xl={6} md={6} lg={6} >
            <Media className="pb-5">
              <Media left>
                <Media object src={require("assets/img/menu1.jpg")} alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>
                  Media heading
                </Media>
                  Great way to make your business appear trust and relevant.
                  <p>199 $</p>
              </Media>
            </Media>
          </Col>
          <Col xs={12} xl={6} md={6} lg={6} >
            <Media className="pb-5">
              <Media left>
                <Media object src={require("assets/img/menu1.jpg")} alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>
                  Media heading
                </Media>
                  Great way to make your business appear trust and relevant.
                  <p>199 $</p>
              </Media>
            </Media>
          </Col>
        </Row>
        <div className="footer">
            <Button color="orange">Move Item</Button>        
        </div>
      </Container>
    </div>
  );
}
