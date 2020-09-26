
import React from "react";
import {
   Card, CardImg, CardTitle, CardText, Button, CardImgOverlay
} from "reactstrap";
export default function ShowMenu() {
  return (
    <div className="home-show-video">
      <Card inverse>
        <CardImgOverlay>
            <CardTitle>BURGER</CardTitle>
            <CardTitle>BACHELOR</CardTitle>
            <CardText>
              How we make delicious Burger
            </CardText>
            <Button color="video">
              <i className="fa fa-play"></i>
            </Button>
        </CardImgOverlay>
        <CardImg src={require("assets/img/menu1.jpg")} alt="Card image cap" />
      </Card>
    </div>
  );
}
