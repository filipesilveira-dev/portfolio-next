import style from "./Card.module.css";
import Image , {StaticImageData}from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  resume: string;
  tech: string[];
  img: string | StaticImageData;
}

export default function Card({ img, name, resume, tech }: CardProps) {
  return (
    <Link href="/projects" className={style.link_wrapper}>
      <div className={style.card_img_wrapper}>
        <Image
          className={style.card_img}
          src={img}
          alt={`Miniatura do projeto ${name}`}
          unoptimized
        />
      </div>
      <div className={style.project_info_container}>
        <h3 className={style.project_title}>{name}</h3>
        <p className={style.project_resume}>{resume}</p>
        <div className={style.span_wrapper}>
          {tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
