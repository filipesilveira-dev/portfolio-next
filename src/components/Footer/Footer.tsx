import Image from "next/image";
import style from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.logo_container}>
          <a href="https://github.com/filipesilveira-dev" target="_blanck" title="GitHub">
            <Image
              src="/github.png"
              alt="Logo do GitHub"
              width={20}
              height={20}
            />
          </a>
          <a href="https://www.linkedin.com/in/filipe-silveira-511889351/" target="_blanck" title="LinkedIn">
            <Image
              src="/linkedin.png"
              alt="Logo do LinkedIn"
              width={20}
              height={20}
            />
          </a>
          <a title="filipesilveira.dev@gmail.com">
            <Image
              src="/email.svg"
              alt="Logo do Eamail"
              width={20}
              height={20}
            />
          </a>
        </div>
        <p className={style.text_copyright}>© 2026 Filipe P. Silveira</p>
        <p className={style.text}>
          Desenvolvido com <span className={style.span}>▲ Next.js</span> 
        
        </p>
        
      </div>
    </footer>
  );
}
