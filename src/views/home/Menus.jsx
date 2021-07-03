import React from "react";
import {
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
  CardBody,
  Media,
  Button,
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
          <Col xs={12} xl={6} md={6} lg={6}>
            <Media className="pb-5">
              <Media left>
                <Media
                  object
                  src={require("assets/img/set1.jpg")}
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Jai Bang set</Media>
                ชุดใจบาง อิ่มเบาๆ
                <p>169 ฿</p>
              </Media>
            </Media>
          </Col>
          <Col xs={12} xl={6} md={6} lg={6}>
            <Media className="pb-5">
              <Media left>
                <Media
                  object
                  src={require("assets/img/set2.jpg")}
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Jai Thung Set</Media>
                ชุดใจถึง อิ่มจัดหนัก
                <p>249 ฿</p>
              </Media>
            </Media>
          </Col>
          <Col xs={12} xl={6} md={6} lg={6}>
            <Media className="pb-5">
              <Media left>
                <Media
                  object
                  src={require("assets/img/set3.jpg")}
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Jai Purn Set</Media>
                ชุดใจปล้ำ อิ่มคุ้ม ยกตีี้ 
                <p>349 ฿</p>
              </Media>
            </Media>
          </Col>
          <Col xs={12} xl={6} md={6} lg={6}>
            <Media className="pb-5">
              <Media left>
                <Media
                  object
                  src={require("assets/img/free.jpg")}
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Free dessert</Media>
                สำหรับนั่งทานที่ร้าน ฟรี เค้ก ผลไม้ ไอศครีม และน้ำแข็งไส
                <p>Free ฿</p>
              </Media>
            </Media>
          </Col>
        </Row>
        {/* <div className="footer">
          <Button color="orange">Promotion 2 free 1 !!</Button>
        </div> */}
      </Container>
    </div>
  );
}
