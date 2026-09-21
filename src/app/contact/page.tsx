import Form from "@/components/Form/Form";
import style from "./page.module.css";

export default function Contact() {
  return (
    <>
      <div className={style.text_wrapper}>
        <h2 className={style.title}>
          <span>Contato</span>
        </h2>
        <p className={style.subtitle}>
          Preencha o formulário ou use um dos canais diretos abaixo.
        </p>
      </div>

      <div className={style.availability_container}>
        <span className={style.availability}>
          Disponível para novos projetos
        </span>
      </div>

      <div className={style.contacts_container}>
                   <a className={style.linkedIn} href="https://www.linkedin.com/in/filipe-silveira-511889351/" target="_blanck" title="LinkedIn">LinkedIn</a>
         <a className={style.gitHub} href="https://github.com/filipesilveira-dev" target="_blanck" title="GitHub">GitHub</a>
      </div>

      <Form/>

      <div className={style.location_text_container}>
        <div className={style.location_text_wrapper}>
          <span>Localização</span>
          <div className={style.location_text}>
            <p>Brasil</p>
            <strong><span>Fortaleza/CE</span></strong>
          </div>
          
        </div>
      </div>
    </>
  );
}
