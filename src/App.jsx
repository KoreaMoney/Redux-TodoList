import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList/TodoList";
import style from "./App.module.css";

export default function App() {
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <Header>ToDo_List_React</Header>
      <main>
        <Input setTodos={setTodos} />
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      </main>
      <div className={style.footer}>
        <Footer>
          ToDoList <br />
          <br /> 즐거운 리액트 시간입니다.
          <br />
          법이 궁금하시면 물어보세요.{" "}
        </Footer>
        <Footer>
          오늘 할일 <br />
          <br /> 리액트에서 redux으로 바꾸기
          <br />
          쉽지않다.
        </Footer>
        <Footer>
          내일 할일
          <br />
          <br /> 아침 9시에 기상하기
          <br />
          쉽지않다.
        </Footer>
      </div>
    </div>
  );
}

const initialState = [
  {
    title: "테스트1",
    contents: "테스트1 내용",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "테스트2",
    contents: "테스트2 내용",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "테스트3",
    contents: "테스트3 내용",
    isDone: true,
    id: uuidv4(),
  },
];
