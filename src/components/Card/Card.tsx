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
    <>
      <Link href="/projects" className={style.link_wrapper}>
        <Image
          className={style.card_img}
          src={img}
          width={135}
          height={90}
          alt="Miniatura do projeto"
          unoptimized
        />
        <div className={style.project_info_container}>
          <h3>{name}</h3>
          <p>{resume}</p>
          <div className={style.span_wrapper}>
            {tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}
