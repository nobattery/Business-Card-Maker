import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  //Card에 표시할 기본 내용(Object 형식)
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  //카드를 생성하거나 업데이트
  const createOrUpdateCard = (card) => {
    //setCards를 호출하는 시점에서
    setCards((cards) => {
      const updated = { ...cards }; //setCard의 상태를 복사하여
      updated[card.id] = card; //Object의 key에 업데이트할 card로 변경
      return updated; //업데이된 Object 리턴
    });
  };

  //card 삭제
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
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
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
