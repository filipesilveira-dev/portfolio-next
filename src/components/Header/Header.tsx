// Por utilizar useState, componente deve ser especificado como renderizado no lado do cliente
"use client";

import Image from "next/image";
import style from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`${isOpen ? style.header_open : style.header}`}>
      <section
        className={`${isOpen ? style.symbols_container_open : style.symbols_container}`}
      >
        <Link href="/">
          <Image src="/logo.svg" alt="Imagem da logo" width={40} height={40} />
        </Link>
        <nav className={style.nav_bar}>
          <ul className={style.nav_bar_list}>
            <Link href="/projects">Projetos</Link>
            <Link href="/about">Sobre</Link>
            <Link href="/skills">Habilidades</Link>
            <Link href="/articles">Artigos</Link>
            <Link href="/contact">Contato</Link>
          </ul>
        </nav>
        <div className={style.menu_toggle_wrapper}>
          {/* Botão para abrir o navbar em telas pequenas. FALTA AJUSTAR LAYOUT QUANDO ABRE*/}
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
          <Image src="/moon.svg" alt="Imagem de lua" width={24} height={24} />
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} /* Estado inicial ao surgir */
            animate={{ height: "auto", opacity: 1 }} /* Estado final (aberto) */
            exit={{ height: 0, opacity: 0 }} /* Estado de saída ao fechar */
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }} /* Tempo e curva */
            style={{ overflow: "hidden" }}
          >
            <nav className={style.nav_bar_open}>
              <ul className={style.nav_bar_list_open}>
                <Link className={style.nav_bar_list_item_open} href="/projects">
                  Projetos
                </Link>
                <Link className={style.nav_bar_list_item_open} href="/about">
                  Sobre
                </Link>
                <Link className={style.nav_bar_list_item_open} href="/skills">
                  Habilidades
                </Link>
                <Link className={style.nav_bar_list_item_open} href="/articles">
                  Artigos
                </Link>
                <Link className={style.nav_bar_list_item_open} href="/contact">
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
