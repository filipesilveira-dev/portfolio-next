import Image from 'next/image'
import style from './Header.module.css'
import Link from 'next/link'

export function Header() {
  return (
    <header className={style.header}>
      <section className={style.symbols_container}>
        <Link href="/">
          <Image src="/logo.svg" alt="Imagem da logo" width={40} height={40}/>
        </Link>
        <Image src="/menuSymbolLightMode.svg" alt="Imagem menu hambúrger" width={24} height={24} className={style.hamburger}/>
        <nav className={style.nav_bar}>
          <ul className={style.nav_bar_list}>
            <Link href="/projects">Projetos</Link>
            <Link href="/about">Sobre</Link>
            <Link href="/skills">Habilidades</Link>
            <Link href="/articles">Artigos</Link>
            <Link href="/contact">Contato</Link>
          </ul>
        </nav>
      </section>
      <Image src="/moon.svg" alt="Imagem de lua" width={24} height={24}/>
    </header>
  );
}
