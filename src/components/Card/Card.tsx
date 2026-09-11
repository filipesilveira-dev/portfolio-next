import style from "./Card.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <>
        
      <Link href="/" className={style.link_wrapper}>
      
        <Image src="https://placehold.co/300x200" width={200} height={300} alt="Miniatura do projeto" unoptimized/>
        <div className={style.project_info_container}>
            <h3>Nome do projeto</h3>
            <p>Resumo do projeto</p>
            <div className={style.span_wrapper}>
                <span>Tecnologia 1</span>
                <span>Tecnologia 2</span>
                <span>Tecnologia 3</span>
            </div>
        </div>
      </Link>
    </>
  );
}
