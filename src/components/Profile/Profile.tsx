import Image from "next/image";
import { Button } from "../Button/Button";
import style from "./Profile.module.css"

export function Profile() {
  return (
    <div className={style.profile}>
      <Image src="https://placehold.co/200" alt="Foto Filipe" width={200} height={200} unoptimized />
      <h1>Desenvolvedor <span>Front-end</span></h1>
      <p>Resumo rápido</p>
      <Button className="">Ver projetos</Button>
    </div>
  );
}
