import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  Button,
  CardImgOverlay,
} from "reactstrap";
export default function ShowMenu() {
  return (
    <div className="home-show-menu">
      <Card inverse>
        <CardImgOverlay>
          <p className="price"></p>
          <CardTitle className="text-header">Promotion</CardTitle>
          <CardText>- Buy 2 Free 1 -</CardText>
        </CardImgOverlay>
        <CardImg src={require("assets/img/sh-bg.jpg")} alt="Card image cap" />
      </Card>
      {/* <Card inverse>
        <CardImgOverlay>
          <p className="price"></p>
          <CardTitle>Dessert</CardTitle>
          <CardText></CardText>
          <Button color="yellow">Order Now</Button>
        </CardImgOverlay>
        <CardImg src={require("assets/img/menu4.jpg")} alt="Card image cap" />
      </Card> */}
    </div>
  );
}
