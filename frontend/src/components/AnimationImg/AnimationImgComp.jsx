import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imgOne from '../../images/imgOne.jpg';
import imgTwo from '../../images/imgTwo.jpg';
import imgThree from '../../images/imgThree.jpg';

function AnimationImgComp() {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={imgOne} class="imageSlider imageSliderOne d-block w-100" alt="First Image" />
    </div>
    <div class="carousel-item">
      <img src={imgTwo} class="imageSlider d-block w-100" alt="Second Image" />
    </div>
    <div class="carousel-item">
      <img src={imgThree} class="imageSlider d-block w-100" alt="Third Image" />
    </div>
  </div>
</div>
  );
}

export default AnimationImgComp;
