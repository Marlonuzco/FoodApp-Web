import React from "react";
import Carousel from "react-bootstrap/Carousel";

import styles from "./styles.module.css";
import img1 from "../../assets/images/iconos/burguer1.png";
import img2 from "../../assets/images/iconos/hotdog1.png";
import img3 from "../../assets/images/iconos/pizza1.1.png";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <p>Burguers</p>
        <img className={styles.img} src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.img} src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.img} src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
