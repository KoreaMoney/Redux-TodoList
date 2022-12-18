import React from "react";
import style from "./style.module.css";

export default function Header({ children }) {
  return (
    <>
      <header className={style.header}>{children}</header>
    </>
  );
}
