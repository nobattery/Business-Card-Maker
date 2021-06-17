import React, { useEffect } from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  //logout => home으로 이동
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  /**
  ----------header----------
              |
    editor    |  preview
              |
  ----------footer----------
   */
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
