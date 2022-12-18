import React from "react";
import style from "./style.module.css";

export default function Todo({ write, isActive, setTodos }) {
  const handleDeleteOnclick = () => {
    setTodos((prev) => prev.filter((d) => d.id !== write.id));
  };

  const handleToggleOnclick = () => {
    setTodos((prev) =>
      prev.map((d) => {
        if (d.id === write.id) {
          return { ...d, isDone: !d.isDone };
        } else {
          return d;
        }
      })
    );
  };

  return (
    <div key={write.id} className={style.todo}>
      <h4>{write.title}</h4>
      <p>{write.contents}</p>
      <button onClick={handleToggleOnclick} className={style.todoBtn}>
        {isActive ? "완료" : "취소"}
      </button>
      <button onClick={handleDeleteOnclick} className={style.todoDeleteBtn}>
        삭제
      </button>
    </div>
  );
}
