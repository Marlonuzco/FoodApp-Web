import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaAlignJustify } from "react-icons/fa";
import NavbarComp from "../../components/navbar/index";
import CarouselComp from "../../components/carousel/index";

import styles from "./style.module.css";
import CardComp from "../../components/cards/cardComp";

function UnLoggedScreen() {
  const navigate = useNavigate();
  return (
    <>
      <NavbarComp />
      <div className={styles.div1}>
        <div className={styles.div2}>
          <CarouselComp />
        </div>
        <div className={styles.div3}>
          <h2 className={styles.title2}>Fast Food and more</h2>
          <p className={styles.text1}>
            Everything you are looking for, you find it here, fast food, drinks
            and more.
          </p>
          <div className={styles.div4}>
            <Button variant="danger" className={styles.btn1} color={""}>
              Order Now {icon1()}
            </Button>
            <Button variant="warning" className={styles.btn2}>
              Sign in {arrowIconRight()}
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.categoriesSection}>
        <div className={styles.categoriesSection2}>
          <CardComp />
        </div>
        <Button
          variant="ligth"
          className={styles.title4}
          onClick={() => {
            navigate("/Categories");
          }}
        >
          <h4>Go to categories {FaArrowRight()}</h4>
        </Button>
      </div>
    </>
  );
}
function arrowIconRight() {
  return (
    <FaArrowRight size={15} color={"#C02425"} className={styles.iconStyle} />
  );
}
function icon1() {
  return <FaAlignJustify size={16} className={styles.iconStyle} />;
}
export default UnLoggedScreen;
