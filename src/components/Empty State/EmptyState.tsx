import style from "./EmptyState.module.css";
import Image from "next/image";

export function EmptySytate() {
  return (
    <section className={style.container}>
      <Image
        src="/build.svg"
        alt="Imagem de construção"
        width={40}
        height={40}
      />
      <h4>Trabalhando nisso</h4>
    </section>
  );
}
