import { Button } from "@/components/Button/Button";
import Contact from "@/components/Contact/Contact";
import Image from "next/image";
import style from "./page.module.css";

export default function About() {
  return (
    <>
      <div className={style.hero}>
        <Image src="/photo.png" alt="Foto Filipe" width={150} height={150} />
        <div className={style.image_label_wrapper}>
          <h3>Filipe P. Silveira</h3>
          <span>Desenvolvedor Front-end</span>
        </div>
        <Button>Contatar</Button>
      </div>
      <div className={style.hero_paragraph}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          inventore minima dolore tempora nam reprehenderit omnis beatae porro
          magnam.
        </p>
      </div>
      <div className={style.hero_span_list}>
        <span>1.5 anos exp</span>
        <span>10+ projetos</span>
        <span>Futuro Full Stack Python</span>
      </div>

      <div className={style.prefessional_background}>
        <h3>Minha trajetória</h3>

        <div className={style.prefessional_background_item}>
          <Image
            src="/academy.svg"
            alt="Imagem de capelo"
            width={40}
            height={40}
          />
          <div className={style.background_item_text_wrapper}>
            <h4>EBAC</h4>
            <span>Nome do curso 1</span>
            <span>Desenvolvedor Front-end</span>
            <span>Desenvolvedor Back-end - em andamento</span>
          </div>
        </div>

        <div className={style.linha_tracejada_vertical_container_pai}>
          <div className={style.linha_tracejada_vertical_container}>
            <div className={style.linha_tracejada_vertical}></div>
          </div>
        </div>

        <div className={style.prefessional_background_item}>
          <Image
            src="/study.svg"
            alt="Imagem de capelo"
            width={40}
            height={40}
          />
          <div className={style.background_item_text_wrapper}>
            <h4>Bootcamp 1</h4>
            <span>Data de início</span>
            <span>Previsão de término</span>
            <span>Desenvolvedor Back-end - em andamento</span>
          </div>
        </div>

        <div className={style.linha_tracejada_vertical_container_pai}>
          <div className={style.linha_tracejada_vertical_container}>
            <div className={style.linha_tracejada_vertical}></div>
          </div>
        </div>

        <div className={style.prefessional_background_item}>
          <Image
            src="/academy.svg"
            alt="Imagem de capelo"
            width={40}
            height={40}
          />
          <div className={style.background_item_text_wrapper}>
            <h4>Análise e desenvolvimento de sistemas</h4>
            <span>Data de início</span>
            <span>Previsão de término</span>
            <span>Desenvolvedor Back-end - em andamento</span>
          </div>
        </div>

        <div className={style.linha_tracejada_vertical_container_pai}>
          <div className={style.linha_tracejada_vertical_container}>
            <div className={style.linha_tracejada_vertical}></div>
          </div>
        </div>

        <div className={style.prefessional_background_item}>
          <Image
            src="/study.svg"
            alt="Imagem de capelo"
            width={40}
            height={40}
          />
          <div className={style.background_item_text_wrapper}>
            <h4>Bootcamp 2</h4>
            <span>Data de início</span>
            <span>Previsão de término</span>
            <span>Desenvolvedor Back-end - em andamento</span>
          </div>
        </div>

        <div className={style.linha_tracejada_vertical_container_pai}>
          <div className={style.linha_tracejada_vertical_container}>
            <div className={style.linha_tracejada_vertical}></div>
          </div>
        </div>

        <div className={style.prefessional_background_item}>
          <Image
            src="/idea.svg"
            alt="Imagem de capelo"
            width={40}
            height={40}
          />
          <div className={style.background_item_text_wrapper}>
            <h4>Projetos pessoais</h4>
            <span>Dice roller</span>
            <span>Balance Me</span>
            <span>Reflect Me - em andamento</span>
          </div>
        </div>

        <div className={style.linha_tracejada_vertical_container_pai}>
          <div className={style.linha_tracejada_vertical_container}>
            <div className={style.linha_tracejada_vertical}></div>
          </div>
        </div>

        <div className={style.prefessional_background_item}>
          <Image
            src="/academy.svg"
            alt="Imagem de capelo"
            width={40}
            height={40}
          />
          <div className={style.background_item_text_wrapper}>
            <h4>Psicologia</h4>
            <span>Tempo de experiência</span>
            <span>soft skills</span>
            <span>Desenvolvedor Back-end - em andamento</span>
          </div>
        </div>

        <div className={style.linha_tracejada_vertical_container_pai}>
          <div className={style.linha_tracejada_vertical_container}>
            <div className={style.linha_tracejada_vertical}></div>
          </div>
        </div>

        <div className={style.prefessional_background_item}>
          <Image
            src="/language.svg"
            alt="Imagem de capelo"
            width={40}
            height={40}
          />
          <div className={style.background_item_text_wrapper}>
            <h4>Casa de cultura britênica</h4>
            <span>Tempo de experiência</span>
            <span>soft skills</span>
            <span>Desenvolvedor Back-end - em andamento</span>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
