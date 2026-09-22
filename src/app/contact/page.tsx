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
        <p className={style.subtitle_desktop}>
          Tem um <strong>projeto</strong> em mente, uma <strong>proposta de trabalho</strong> ou quer apenas trocar ideias sobre <strong>tecnologia</strong>, <strong>migração de carreira</strong> ou mesmo <strong>Psicologia e sua relação com a tecnologia</strong>? Preencha o formulário abaixo ou utilize os canais diretos.
        </p>
      </div>

      <div className={style.availability_form_container}>
        <div className={style.availability_info_container}>
          <div className={style.availability_container}>
            <span className={style.availability_mobile}>
              <strong>Disponível para novos projetos</strong>
            </span>
            <span className={style.availability_desktop}>
              <strong>Disponível para novas oportunidades e freelance</strong>
            </span>
          </div>

          {/* Lnks de contato em telas maiores */}
          {/* LinkedIn em telas maiores */}
          <a
            className={style.linkedIn_desktop_text_container}
            href="https://www.linkedin.com/in/filipe-silveira-511889351/"
            target="_blanck"
            title="LinkedIn"
          >
            <div className={style.linkedIn_desktop_text_wrapper}>
              <span>LinkedIn</span>
              <div className={style.linkedIn_desktop_text}>
                <p>/in/filipe-silveira-511889351/</p>
              </div>
            </div>
            <div className={style.btn}>Abrir</div>
          </a>

          {/* GitHub em telas maiores */}
          <a
            className={style.gitHub_desktop_text_container}
            href="https://github.com/filipesilveira-dev"
            target="_blanck"
            title="GitHub"
          >
            <div className={style.gitHub_desktop_text_wrapper}>
              <span>GitHub</span>
              <div className={style.gitHub_desktop_text}>
                <p>github.com/filipesilveira-dev</p>
              </div>
            </div>

            <div className={style.btn}>Abrir</div>
          </a>

          {/* Localização em telas maiores */}
          <div className={style.location_desktop_text_container}>
            <div className={style.location_desktop_text_wrapper}>
              <span>Localização</span>
              <div className={style.location_desktop_text}>
                <p>Brasil</p>
                <strong>
                  <span>Fortaleza/CE</span>
                </strong>
              </div>
            </div>
          </div>

          {/* Modalidades em telas maiores */}
          <div className={style.model_desktop_text_container}>
            <div className={style.model_desktop_text_wrapper}>
              <span>Modalidades</span>
              <div className={style.model_desktop_text}>
                <p>Remoto</p>
                <strong>
                  <span>Híbrido</span>
                </strong>
                <strong>
                  <span>Presencial</span>
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* Aparece apenas em telas menores */}
        <div className={style.contacts_container}>
          <a
            className={style.linkedIn}
            href="https://www.linkedin.com/in/filipe-silveira-511889351/"
            target="_blanck"
            title="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            className={style.gitHub}
            href="https://github.com/filipesilveira-dev"
            target="_blanck"
            title="GitHub"
          >
            GitHub
          </a>
        </div>

        {/* Container do formulário */}
        <div className={style.form_container}>
          <Form />
        </div>
      </div>

      {/* Localização em telas pequenas */}
      <div className={style.location_text_container}>
        <div className={style.location_text_wrapper}>
          <span>Localização</span>
          <div className={style.location_text}>
            <p>Brasil</p>
            <strong>
              <span>Fortaleza/CE</span>
            </strong>
          </div>
        </div>
      </div>

      {/* Modalidades em telas pequenas */}
      <div className={style.model_text_container}>
        <div className={style.model_text_wrapper}>
          <span>Modalidades</span>
          <div className={style.model_text}>
            <p>Remoto</p>
            <strong>
              <span>Híbrido</span>
            </strong>
            <strong>
              <span>Presencial</span>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
