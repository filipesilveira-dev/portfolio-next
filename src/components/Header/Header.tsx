// Por utilizar useState, componente deve ser especificado como renderizado no lado do cliente
"use client";

import Image from "next/image";
import style from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

type NavLinkId =
  "home" | "about" | "projects" | "skills" | "articles" | "contact";
interface NavItem {
  id: NavLinkId;
  label: string;
  path: string;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // Hook Next js que permite ler a URL. Ou seja, sempre que ela mudar, o Next.js re-renderiza na navbar. Será usado no código para comparar o que está no path (caminho) da barra de endereço com o path (propriedade passada para indicar o "href" do Link). Caso sejam iguais, a estilização de "ativo" será aplicada
  const pathName = usePathname();

  const navItems: NavItem[] = [
    { id: "home", label: "Início", path: "/" },
    { id: "about", label: "Sobre", path: "/about" },
    { id: "projects", label: "Projetos", path: "/projects" },
    { id: "skills", label: "Habilidades", path: "/skills" },
    // { id: "articles", label: "Artigos", path: "/articles" },
    { id: "contact", label: "Contato", path: "/contact" },
  ];

  return (
    <header className={`${style.header} ${isOpen ? style.header_open : ""}`}>
      <section className={style.symbols_container}>
        <Link href="/">
          <Image src="/logo.svg" alt="Imagem da logo" width={40} height={40} />
        </Link>

        {/* NavBar criada com map() em "navItems" */}
        <nav className={style.nav_bar}>
          <ul className={style.nav_bar_list}>
            {navItems.map((item) => {
              // Caso pathName seja igual ao path do Link da lista, "isActive" é true
              const isActive = pathName === item.path;
              return (
                <Link
                  key={item.id}
                  href={`${item.path}`}
                  className={`${style.nav_bar_item} ${isActive ? style.active : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>
        </nav>

        <div className={style.menu_toggle_wrapper}>
          <button
            className={style.hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src="/menuSymbolLightMode.svg"
              alt="Imagem menu hambúrger"
              width={24}
              height={24}
            />
          </button>
          {/* <Image
            src="/moon.svg"
            alt="Imagem de lua"
            width={36}
            height={36}
            className={style.toggle_symbol}
          /> */}
        </div>
      </section>

      {/* Dropdown fora do fluxo do header, não altera o layout dele */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={style.dropdown}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className={style.nav_bar_open}>
              <ul className={style.nav_bar_list_open}>
                <Link
                  className={style.nav_bar_list_item_open}
                  href="/"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Início
                </Link>
                <Link
                  className={style.nav_bar_list_item_open}
                  href="/projects"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Projetos
                </Link>
                <Link
                  className={style.nav_bar_list_item_open}
                  href="/about"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Sobre
                </Link>
                <Link
                  className={style.nav_bar_list_item_open}
                  href="/skills"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Habilidades
                </Link>
                <Link
                  className={style.nav_bar_list_item_open}
                  href="/articles"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Artigos
                </Link>
                <Link
                  className={style.nav_bar_list_item_open}
                  href="/contact"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Contato
                </Link>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
