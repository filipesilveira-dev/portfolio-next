import Link from "next/link";
import Card from "../Card/Card";

export default function Projects() {
  return (
    <div>
      <h2>Projetos em destaque</h2>
      <Link href="/projects" />
      <Card/>
    </div>
  );
}
