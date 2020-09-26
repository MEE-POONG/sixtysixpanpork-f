
import React from "react";
import {
   Card, CardImg, CardTitle, CardText, Button, CardImgOverlay
} from "reactstrap";
export default function ShowMenu() {
  return (
    <div className="home-show-menu">
      <Card inverse>
        <CardImgOverlay>
          <p className="price">199 $</p>
          <CardTitle>The Burger President</CardTitle>
          <CardText>
            Great way to make your business appear trust and relevant.
          </CardText>
          <Button color="yellow">
            Order Now
          </Button>
        </CardImgOverlay>
        <CardImg src={require("assets/img/menu1.jpg")} alt="Card image cap" />
      </Card>
      <Card inverse>
        <CardImgOverlay>
          <p className="price">199 $</p>
          <CardTitle>The Burger President</CardTitle>
          <CardText>
            Great way to make your business appear trust and relevant.
          </CardText>
          <Button color="yellow">
            Order Now
          </Button>
        </CardImgOverlay>
        <CardImg src={require("assets/img/menu1.jpg")} alt="Card image cap" />
      </Card>
    </div>
  );
}
