import React from "react";
import SlideHeader from "./SlideHeader.jsx";
import Menus from "./Menus.jsx";
import ShowMenus from "./ShowMenu.jsx";
import HomeAbout from "./HomeAbout.jsx";
import ShowVideo from "./ShowVideo.jsx";
import HomeContact from "./HomeContact.jsx";


export default function Home() {
  return (
    <>
        <SlideHeader />
        <Menus />
        <ShowMenus />
        <HomeAbout />
        <ShowVideo />
        <HomeContact />
    </>
  );
}
