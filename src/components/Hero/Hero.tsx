// Hero.tsx — sem useTheme, sem "use client"
import Image from "next/image";
import { Profile } from "../Profile/Profile";
import style from "./Hero.module.css";

export function Hero() {
  return (
    <section className={style.hero}>
      <Profile />

      <div className={style.img_wrapper}>
        <Image
          src="/heroAlt-light.png"
          alt="Imagem hero"
          className={style.img_light}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          unoptimized
        />
        <Image
          src="/heroAlt-dark.png"
          alt="Imagem hero"
          aria-hidden="true"  // evita leitura duplicada em leitores de tela
          className={style.img_dark}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          unoptimized
        />
      </div>
    </section>
  );
}