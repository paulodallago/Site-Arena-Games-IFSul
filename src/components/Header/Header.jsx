import React from "react";
import { Menubar } from "primereact/menubar";
import logo_if from "../../assets/img/if/logo.png";
import styles from "./Header.module.css";

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
    <div className={styles.menuLeft}>
      <img src={logo_if} alt="Logo Ifsul" height="40" className={styles.logo} />
    </div>
  );

  const end = (
    <div className={styles.menuRight}>
      {items.map((item, i) => (
        <a key={i} href={item.url} className={styles.menuLink}>
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </a>
      ))}
      <a
        href="https://painel.passofundo.ifsul.edu.br/"
        className={styles.register}
      >
        <span>Inscrever-se</span>
      </a>
    </div>
  );

  return (
    <>
      <Menubar start={start} end={end} className={styles.menuBar} />
    </>
  );
};

export default Header;
