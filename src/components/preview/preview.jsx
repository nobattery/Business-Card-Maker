import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

//Maker에서 생성한 cards 배열이 넘어온다.
const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map((key) => (
        <Card key={key} card={cards[key]} />
      ))}
    </ul>
  </section>
);

export default Preview;
