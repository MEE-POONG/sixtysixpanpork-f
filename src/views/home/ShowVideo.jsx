
import React from "react";
import {
   Card, CardImg, CardTitle, CardText, Button, CardImgOverlay
} from "reactstrap";
export default function ShowMenu() {
  return (
    <div className="home-show-video">
      <Card inverse>
        <CardImgOverlay>   
        </CardImgOverlay>
        <CardImg src={require("assets/img/cover.jpg")} alt="Card image cap" />
      </Card>
    </div>
  );
}
