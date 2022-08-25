import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AnimationImgComp() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <p>Bild 1</p>
          {/* <img class="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide" /> */}
        </div>
        <div class="carousel-item">
          <p>Bild 2</p>

          {/* <img class="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide" /> */}
        </div>
        <div class="carousel-item">
          <p>Bild 3</p>

          {/* <img class="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide" /> */}
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    // <div
    //   id="carouselExampleIndicators"
    //   class="carousel slide"
    //   data-ride="carousel"
    // >
    //   <ol class="carousel-indicators">
    //     <li
    //       data-target="#carouselExampleIndicators"
    //       data-slide-to="0"
    //       class="active"
    //     ></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //   </ol>
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img class="d-block w-100" src="./imgOne.jpg" alt="First slide" />
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src="./imgTwo.jpg" alt="Second slide" />
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src="./imgThree.jpg" alt="Third slide" />
    //     </div>
    //   </div>
    //   <a
    //     class="carousel-control-prev"
    //     href="#carouselExampleIndicators"
    //     role="button"
    //     data-slide="prev"
    //   >
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Förra</span>
    //   </a>
    //   <a
    //     class="carousel-control-next"
    //     href="#carouselExampleIndicators"
    //     role="button"
    //     data-slide="next"
    //   >
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Nästa</span>
    //   </a>
    // </div>
  );
}

export default AnimationImgComp;
