import React, { useState } from "react";
import style from "./style.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();

    const newTodo = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const handleTitleOnchange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsOnchange = (event) => {
    setContents(event.target.value);
  };

  const handleBtnOnReset = () => {
    setTitle("");
    setContents("");
  };

  return (
    <div>
      <section className={style.input}>
        <form onSubmit={handleSubmitClick}>
          <label htmlFor="title">제목 : </label>
          <input
            id="title"
            value={title}
            onChange={handleTitleOnchange}
            placeholder="ToDoList"
          />
          <label htmlFor="contents">내용 : </label>
          <input
            id="contents"
            value={contents}
            onChange={handleContentsOnchange}
            placeholder="오늘 할일 작성하기"
          />

          <button className={style.button}>추가하기</button>
        </form>
        <button className={style.reset} onClick={handleBtnOnReset}>
          초기화
        </button>
      </section>
    </div>
  );
}
