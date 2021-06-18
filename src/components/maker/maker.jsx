import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  //Card에 표시할 기본 내용
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Kangju1",
      company: "companyname1",
      theme: "light",
      title: "title1",
      email: "lkj1@gmail.com",
      message: "message 1",
      fileName: "filename1",
      fileUrl: null,
    },
    {
      id: "2",
      name: "Kangju2",
      company: "companyname2",
      theme: "dark",
      title: "title2",
      email: "lkj2@gmail.com",
      message: "message 2",
      fileName: "filename2",
      fileUrl: null,
    },
    {
      id: "3",
      name: "Kangju3",
      company: "companyname3",
      theme: "colorful",
      title: "title3",
      email: "lkj3@gmail.com",
      message: "message 3",
      fileName: "filename3",
      fileUrl: null,
    },
  ]);
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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
