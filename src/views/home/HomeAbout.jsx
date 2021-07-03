import React from "react";
import { Container, Row, Col, CardTitle, CardText, Card } from "reactstrap";
import GoogleMapReact from "google-map-react";
export default function HomeAbout() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <div className="home-about">
      <Container>
        <Row className="body">
          <Col xs={12} xl={6} md={6} lg={6}>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247109.43369549693!2d101.28230418890989!3d14.594237791078461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311c2bf471e22c3f%3A0x1159fcbe0426c916!2zU2l4dHlTaXgg4Lir4Lih4Li54LiB4Liw4LiX4Liw!5e0!3m2!1sth!2sth!4v1625286474160!5m2!1sth!2sth"
          width="600"
          height="450"
          Style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
          </Col>
          <Col xs={12} xl={6} md={6} lg={6}>
            <Card>
              <CardTitle className="text-header">Location</CardTitle>
              <CardText className="text-srcip">Ready to serve food</CardText>
              <p className="text-detail"></p>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}
