import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imgOne from '../../images/imgOne.jpg';
import imgTwo from '../../images/imgTwo.jpg';
import imgThree from '../../images/imgThree.jpg';

function AnimationImgComp() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imgOne} className="imageSlider imageSliderOne d-block w-100" alt="First Image" />
    </div>
    <div className="carousel-item">
      <img src={imgTwo} className="imageSlider d-block w-100" alt="Second Image" />
    </div>
    <div className="carousel-item">
      <img src={imgThree} className="imageSlider d-block w-100" alt="Third Image" />
    </div>
  </div>
</div>
  );
}

export default AnimationImgComp;
