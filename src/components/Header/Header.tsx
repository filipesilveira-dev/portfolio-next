// Por utilizar useState, componente deve ser especificado como renderizado no lado do cliente
"use client"

import Image from "next/image";
import style from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={style.header}>
      <section className={style.symbols_container}>
        <Link href="/">
          <Image src="/logo.svg" alt="Imagem da logo" width={40} height={40} />
        </Link>

        <div>
          {/* Botão para abrir o navbar em telas pequenas. FALTA AJUSTAR LAYOUT QUANDO ABRE*/}
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image
              src="/menuSymbolLightMode.svg"
              alt="Imagem menu hambúrger"
              width={24}
              height={24}
              className={style.hamburger}
            />
          </button>
          {isOpen && (
            <nav className={style.nav_bar}>
              <ul className={style.nav_bar_list}>
                <Link href="/projects">Projetos</Link>
                <Link href="/about">Sobre</Link>
                <Link href="/skills">Habilidades</Link>
                <Link href="/articles">Artigos</Link>
                <Link href="/contact">Contato</Link>
              </ul>
            </nav>
          )}
        </div>

      </section>
      <Image src="/moon.svg" alt="Imagem de lua" width={24} height={24} />
    </header>
  );
}
