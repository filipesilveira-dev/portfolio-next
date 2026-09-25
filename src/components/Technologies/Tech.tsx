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
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/css.png"
            width={30}
            height={30}
            className={style.card}
            title="CSS3"
            alt="Logo CSS"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/tailwind.png"
            width={30}
            height={30}
            className={style.card}
            title="Tailwind CSS"
            alt="Logo Tailwind CSS"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/js.png"
            width={30}
            height={30}
            className={style.card}
            title="JavaScript"
            alt="Logo JavaScript"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/typescript.png"
            width={30}
            height={30}
            className={style.card}
            title="TypeScript"
            alt="Logo TypeScript"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/nodejs.png"
            width={30}
            height={30}
            className={style.card}
            title="Node Js"
            alt="Logo NodeJs"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/react.png"
            width={30}
            height={30}
            className={style.card}
            title="React"
            alt="Logo React"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/motion.png"
            width={30}
            height={30}
            className={style.card}
            title="Motion"
            alt="Logo Motion"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/next.js.png"
            width={30}
            height={30}
            className={style.card}
            title="Next Js"
            alt="Logo Next.JS"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/vercel.png"
            width={30}
            height={30}
            className={style.card}
            title="Vercel"
            alt="Logo Vercel"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/git.png"
            width={30}
            height={30}
            className={style.card}
            title="Git"
            alt="Logo Git"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/githubLight.png"
            width={30}
            height={30}
            className={style.card}
            title="GitHub"
            alt="Logo GitHub"
            unoptimized
            priority
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
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/css.png"
            width={30}
            height={30}
            className={style.card}
            title="CSS3"
            alt="Logo CSS"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/tailwind.png"
            width={30}
            height={30}
            className={style.card}
            title="Tailwind CSS"
            alt="Logo Tailwind CSS"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/js.png"
            width={30}
            height={30}
            className={style.card}
            title="JavaScript"
            alt="Logo JavaScript"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/typescript.png"
            width={30}
            height={30}
            className={style.card}
            title="TypeScript"
            alt="Logo TypeScript"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/nodejs.png"
            width={30}
            height={30}
            className={style.card}
            title="Node Js"
            alt="Logo NodeJs"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/react.png"
            width={30}
            height={30}
            className={style.card}
            title="React"
            alt="Logo React"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/motion.png"
            width={30}
            height={30}
            className={style.card}
            title="Motion"
            alt="Logo Motion"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/next.js.png"
            width={30}
            height={30}
            className={style.card}
            title="Next Js"
            alt="Logo Next.JS"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/vercel.png"
            width={30}
            height={30}
            className={style.card}
            title="Vercel"
            alt="Logo Vercel"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/git.png"
            width={30}
            height={30}
            className={style.card}
            title="Git"
            alt="Logo Git"
            unoptimized
            priority
          />
          <Image
            src="/tech_logos/githubLight.png"
            width={30}
            height={30}
            className={style.card}
            title="GitHub"
            alt="Logo GitHub"
            unoptimized
            priority
          />
        </div>
      </div>
    </div>
  );
}
