import React from "react";
import Todo from "../Todo/Todo";
import style from "./style.module.css";

export default function TodoList({ todos, setTodos, isActive }) {
  return (
    <>
      <div>
        <h3 className={style.active}>
          {isActive === true ? "Working👨‍💻" : "Done🔚"}
        </h3>
        <div className={style.todolist}>
          {todos
            .filter((write) => write.isDone === !isActive)
            .map((write) => {
              return (
                <Todo write={write} isActive={isActive} setTodos={setTodos} />
              );
            })}
        </div>
      </div>
    </>
  );
}
