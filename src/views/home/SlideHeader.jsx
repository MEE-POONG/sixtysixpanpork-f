
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from "reactstrap";
import { MenuArray } from "../../ArrayData";
import '../../assets/scss/header.scss'

  function SlideHeader() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === MenuArray.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? MenuArray.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const slides = MenuArray.map((MenuArray, i) => {
      console.log(MenuArray);
      return (
        <CarouselItem 
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={i}
        >
          <img src={MenuArray.src} alt={MenuArray.altText} />
          <CarouselCaption className="text-header" captionHeader={MenuArray.header} captionText=""/>
          <CarouselCaption className="text-detail" captionHeader={MenuArray.text} captionText={MenuArray.detail}/>
        </CarouselItem>
      );
    });
  
    return (
      <Carousel activeIndex={activeIndex} next={next} previous={previous} >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  export default SlideHeader;
