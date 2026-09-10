import Image from "next/image";
import { Button } from "../Button/Button";
import style from "./Profile.module.css"
import Link from "next/link";

export function Profile() {
  return (
    <div className={style.profile_container}>
      <Image src="https://placehold.co/200" alt="Foto Filipe" width={200} height={200} unoptimized />
      <h1>Desenvolvedor <span>Front-end</span></h1>
      <p>Olá! Sou Filipe e atuo com Desenvolvimento Web, com foco atual em Front-end.</p>
      <Link href="/projects"><Button className="">Ver projetos</Button></Link>
    </div>
  );
}
