import Link from "next/link";
import { Button } from "../Button/Button";
import style from "./Contact.module.css";
import Image from "next/image";

export default function Contact() {
  return (
  <div className={style.contact}>
    
      <div className={style.contact_section}>
        <Image src="/send.svg" alt="Imagem de enviar" width={50} height={50} className={style.img}/>

        <div className={style.contact_wrapper}>
            <div className={style.contact_text_wrapper}>
                <h2>Tem um projeto em mente?</h2>
                <p>Vamos transformar sua ideia em realidade.</p>
            </div>
            <Link href="/contact"><Button className={style.btn}>Entre em contato</Button></Link>
        </div>

      </div>
  </div>
);
}
