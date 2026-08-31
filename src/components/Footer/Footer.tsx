import Image from "next/image";
import style from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.logo_container}>
          <Image
            src="/github.png"
            alt="Logo do GitHub"
            width={20}
            height={20}
          />
          <Image
            src="/linkedin.png"
            alt="Logo do LinkedIn"
            width={20}
            height={20}
          />
          <Image
            src="/whatsapp.png"
            alt="Logo do Whatsapp"
            width={20}
            height={20}
          />
        </div>
        <p className={style.text_copyright}>© 2026 Filipe P. Silveira</p>
        <p className={style.text}>
          Desenvolvido com <span className={style.span}>▲ Next.js</span> 
        
        </p>
        
      </div>
    </footer>
  );
}
