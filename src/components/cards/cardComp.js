import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import img1 from "../../assets/images/iconos/burguer1.png";
import img2 from "../../assets/images/iconos/hotdog1.png";
import img3 from "../../assets/images/iconos/pizza1.1.png";
import img4 from "../../assets/images/iconos/tacos1.png";
import img5 from "../../assets/images/iconos/pasta1.png";
import img6 from "../../assets/images/iconos/arroz2.png";
import img7 from "../../assets/images/iconos/drinks.png";

const cards = [
  {
    id: 1,
    title: "Burguers",
    image: img1,
  },
  {
    id: 2,
    title: "Hot Dogs",
    image: img2,
  },
  {
    id: 3,
    title: "Pizzas",
    image: img3,
  },
  {
    id: 4,
    title: "Tacos",
    image: img4,
  },
  {
    id: 5,
    title: "Pastas",
    image: img5,
  },
  {
    id: 6,
    title: "Rices",
    image: img6,
  },
  {
    id: 7,
    title: "Drinks",
    image: img7,
  },
];

function CardComp({ title, imageSource }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.div1}>
        {cards.map((item) => (
          <div className={styles.card} key={item.id} onClick={() => {navigate('/Products')}}>
            <img
              src={item.image}
              className={styles.cardImg}
              alt={"img " && item.title}
            />
            <h2 className={styles.cardTitle}>{item.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardComp;
