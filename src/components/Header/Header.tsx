import Image from 'next/image'
import style from './Header.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <section className={style.symbols_container}>
        <Image src="/logo.svg" alt="Imagem da logo" width={40} height={40}/>
        <Image src="/menuSymbolLightMode.svg" alt="Imagem menu hambúrger" width={24} height={24} className={style.hamburger}/>
        <nav className={style.nav_bar}>
          <ul className={style.nav_bar_list}>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Habilidades</li>
            <li>Contato</li>
          </ul>
        </nav>
      </section>
      <Image src="/moon.svg" alt="Imagem de lua" width={24} height={24}/>
    </header>
  );
}
