import style from "./Tech.module.css";
import Image from "next/image";

export default function Tech() {
  return (
    <div className={style.tech_container}>
      <h2>Tecnologias</h2>
      <div className={style.carousel}>
        <div className={style.carousel_group}>
          <Image
            src="/tech_logos/html.png"
            width={30}
            height={30}
            className={style.card}
            title="HTML5"
            alt="Logo HTML"
          />
          <Image
            src="/tech_logos/css.png"
            width={30}
            height={30}
            className={style.card}
            title="CSS3"
            alt="Logo CSS"
          />
          <Image
            src="/tech_logos/js.png"
            width={30}
            height={30}
            className={style.card}
            title="JavaScript"
            alt="Logo JavaScript"
          />
          <Image
            src="/tech_logos/nodejs.png"
            width={30}
            height={30}
            className={style.card}
            title="Node Js"
            alt="Logo NodeJs"
          />
          <Image
            src="/tech_logos/react.png"
            width={30}
            height={30}
            className={style.card}
            title="React"
            alt="Logo React"
          />
          <Image
            src="/tech_logos/next.js.png"
            width={30}
            height={30}
            className={style.card}
            title="Next Js"
            alt="Logo Next.JS"
          />
          <Image
            src="/tech_logos/git.png"
            width={30}
            height={30}
            className={style.card}
            title="Git"
            alt="Logo Git"
          />
          <Image
            src="/tech_logos/githubLight.png"
            width={30}
            height={30}
            className={style.card}
            title="GitHub"
            alt="Logo GitHub"
          />
        </div>
        {/* Segundo grupo idêntico ao primeiro para gerar a sensação de carrossel infinito */}
        <div className={style.carousel_group}>
          <Image
            src="/tech_logos/html.png"
            width={30}
            height={30}
            className={style.card}
            title="HTML5"
            alt="Logo HTML"
          />
          <Image
            src="/tech_logos/css.png"
            width={30}
            height={30}
            className={style.card}
            title="CSS3"
            alt="Logo CSS"
          />
          <Image
            src="/tech_logos/js.png"
            width={30}
            height={30}
            className={style.card}
            title="JavaScript"
            alt="Logo JavaScript"
          />
          <Image
            src="/tech_logos/nodejs.png"
            width={30}
            height={30}
            className={style.card}
            title="Node Js"
            alt="Logo NodeJs"
          />
          <Image
            src="/tech_logos/react.png"
            width={30}
            height={30}
            className={style.card}
            title="React"
            alt="Logo React"
          />
          <Image
            src="/tech_logos/next.js.png"
            width={30}
            height={30}
            className={style.card}
            title="Next Js"
            alt="Logo Next.JS"
          />
          <Image
            src="/tech_logos/git.png"
            width={30}
            height={30}
            className={style.card}
            title="Git"
            alt="Logo Git"
          />
          <Image
            src="/tech_logos/githubLight.png"
            width={30}
            height={30}
            className={style.card}
            title="GitHub"
            alt="Logo GitHub"
          />
        </div>
      </div>
    </div>
  );
}
