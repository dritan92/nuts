import React, {Component} from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

var data = [
  {
    id         : "slide1",
    imagePath  : "img1.jpg",
    imageAlt   : "Slide 1 Image",
    title      : "Slide 1",
    subtitle   : "Slide 1 Image SubTitle",
    text       : "Slide 1 Image Text",
    action     : "Slide 1 Image Action",
    actionHref : "href"
  },
  {
    id         : "slide2",
    imagePath  : "img2.jpg",
    imageAlt   : "Slide 2 Image",
    title      : "Slide 2",
    subtitle   : "Slide 2 Image SubTitle",
    text       : "Slide 2 Image Text",
    action     : "Slide 2 Image Action",
    actionHref : "href"
  },
  {
    id         : "slide3",
    imagePath  : "img3.jpg",
    imageAlt   : "Slide 3 Image",
    title      : "Slide 3",
    subtitle   : "Slide 3 Image SubTitle",
    text       : "Slide 3 Image Text",
    action     : "Slide 3 Image Action",
    actionHref : "href"
  },
];

var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
   };

export default (props) => {
  return(
    <article id = {props.id}>
      <h2 className="major">
        {props.title}
      </h2>
      <span className="image main">
        <img src={props.image} alt="" />
      </span>
      <Slider>
       {content.map((article, index) => <div key={index}>
         <h2>{article.title}</h2>
         <div>{article.description}</div>
       </div>)}
     </Slider>
    </article>
  )
}
