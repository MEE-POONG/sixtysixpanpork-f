
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from "reactstrap";

  const items = [
    {
      src: require('assets/img/herder/slide1.jpg'),
      altText: 'Slide 1',
      header: 'Main course',
      text: 'PanProk',
      detail: 'Jai Bang Set'
    },
    {
      src: require('assets/img/herder/slide1.jpg'),
      altText: 'Slide 2',
      header: 'Main course',
      text: 'PanProk',
      detail: 'Jai Thung Set'
    },
    {
      src: require('assets/img/herder/slide1.jpg'),
      altText: 'Slide 3',
      header: 'Main course',
      text: 'PanProk',
      detail: 'Jai Purn Set'
    },
    {
      src: require('assets/img/herder/slide1.jpg'),
      altText: 'Slide 4',
      header: 'Dessert',
      text: 'Cake',
      detail: 'chocolate'
    },
    {
      src: require('assets/img/herder/slide1.jpg'),
      altText: 'Slide 4',
      header: 'Drink',
      text: 'soft drink',
      detail: 'Est'
    },
    {
      src: require('assets/img/herder/slide1.jpg'),
      altText: 'Slide 4',
      header: 'Drink',
      text: 'beer',
      detail: 'Chang'
    }
  ];
  
  const SlideHeader = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    // const goToIndex = (newIndex) => {
    //   if (animating) return;
    //   setActiveIndex(newIndex);
    // }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption className="text-header" captionHeader={item.header} />
          <CarouselCaption className="text-detail" captionHeader={item.text} captionText={item.detail}/>
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  export default SlideHeader;
