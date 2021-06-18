import React from "react";
import styles from "./card.module.css";

//마지막 카드에 표시할 기본 이미지.
const DEFAULT_IMAGE = "/images/default_logo.png";

//Card의 내용을 구성.
const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileUrl } =
    card;
  const url = fileUrl || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

//전달받은 theme에 해당하는 styles를 리턴
function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unkown theme: ${theme} `);
  }
}

export default Card;
