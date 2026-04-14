import React from "react";
import { Menubar } from "primereact/menubar";
import logo_if from "../../assets/img/if/logo.png";
import "./Header.css";

const Header = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/",
    },
    {
      label: "Próxima Edição",
      icon: "pi pi-calendar",
      url: "/programacao",
    },
  ];

  const start = (
    <div className="menu-left">
      <img src={logo_if} alt="Logo Ifsul" height="40" className="logo" />
    </div>
  );

  const end = (
    <div className="menu-right">
      {items.map((item, i) => (
        <a key={i} href={item.url} className={"menu-link"}>
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </a>
      ))}
      <a href="https://painel.passofundo.ifsul.edu.br/" className="register">
        <span>Inscrever-se</span>
      </a>
    </div>
  );

  return (
    <>
      <Menubar start={start} end={end} className="menubar" />
    </>
  );
};

export default Header;
