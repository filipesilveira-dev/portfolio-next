import style from "./page.module.css";
// import { projects } from "@/utils/projects"
import balanceMe from "../../../../public/prints/balanceMe.png";
import Image from "next/image";
import Link from "next/link";

// interface ProjectProps{
//     slug: string;
// }

export default function Project() {
  const projetoTeste = {
    name: "Nome Do Projeto",
    resume2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["React", "Typescript", "CSS Modules"],
    img: balanceMe,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "Concluído",
    type: "Projeto pessoal",
    functions: [
      {
        function: "Registro de obrigações",
        subtitle: "cadastro de atividades que representam demandas do dia",
      },
      {
        function: "Registro de lazer",
        subtitle: "cadastro de atividades associadas a descanso e bem-estar",
      },
      {
        function: "Níveis de intensidade",
        subtitle: "atribuição de intensidade de 1 a 10 para cada atividade",
      },
      {
        function: "Balanço diário",
        subtitle:
          "visualização proporcional entre obrigações e momentos de lazer",
      },
      {
        function: "Persistência local",
        subtitle: "armazenamento dos registros no navegador",
      },
    ],
    concepts: [
      "componentização",
      "gerenciamento de estado",
      "estado global",
      "persistência de dados",
      "localStorage",
      "formulários",
      "tipagem com TypeScript",
      "design responsivo",
      "mobile-first",
    ],
    challenges:
      "Transformar uma ideia abstrata de equilíbrio entre demandas e lazer em uma representação visual simples, compreensível e dinâmica, além de estruturar o gerenciamento e a persistência dos dados no cliente.",
    experience:
      "O projeto proporcionou a prática de transformar uma necessidade identificada em uma aplicação funcional, unindo desenvolvimento front-end, organização de dados, gerenciamento de estado e decisões de experiência do usuário.",
    url: "https://github.com/filipesilveira-dev/balance-me-app",
    deploy: "https://filipesilveira-dev.github.io/balance-me-app/",
  };
  // const project = projects.find((p)=> p.slug === slug)
  return (
    <>
      <div className={style.text_wrapper}>
        <h2 className={style.title}>{projetoTeste.name}</h2>
        <p className={style.subtitle}>{projetoTeste.resume2}</p>
      </div>
      <div className={style.img_wrapper}>
        <Image
          src={projetoTeste.img}
          height={200}
          width={300}
          alt={`Imagem do prjeto ${projetoTeste.name}`}
          title={projetoTeste.name}
        />
      </div>

      {/* Card contendo as informações do projeto */}
      <div className={style.card_wrapper}>
        <div className={style.card_container}>
          <h3>Informações</h3>
          <div className={style.tech_container}>
            <h4>Tecnologias</h4>
            <div className={style.tech_wrapper}>
              {projetoTeste.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className={style.status_container}>
            <h4>Status</h4>
            <span>{projetoTeste.status}</span>
          </div>
          <div className={style.type_container}>
            <h4>Tipo</h4>
            <span>{projetoTeste.type}</span>
          </div>
          <div className={style.btn_container}>
            {projetoTeste.deploy && (
              <a
                href={projetoTeste.deploy}
                target="_blanck"
                title={projetoTeste.name}
              >
                Ver projeto publicado
              </a>
            )}
            <a
              href={projetoTeste.url}
              target="_blanck"
              title={projetoTeste.name}
            >
              Ver no GitHub
            </a>
          </div>
        </div>
        {/* Fim do Card com as informações */}
      </div>

      <div className={style.about_description_text_wrapper}>
        <h3>Sobre</h3>
        <p> {projetoTeste.about}</p>
      </div>

      <div className={style.about_description_text_wrapper}>
        <h3>Descrição</h3>
        <p>{projetoTeste.description}</p>
      </div>

      <div className={style.function_container}>
        <h3>Funcionalidades</h3>
        {projetoTeste.functions.map((f) => (
          <div key={f.function} className={style.function_wrapper}>
            <h4>{f.function}</h4>
            <p>{f.subtitle}</p>
          </div>
        ))}
      </div>

      <div className={style.concepts_container}>
        <h3>Conceitos aplicados</h3>
        <div className={style.concepts_wrapper}>
          {projetoTeste.concepts.map((concept) => (
            <span key={concept}>{concept}</span>
          ))}
        </div>
      </div>

      <div className={style.about_description_text_wrapper}>
        <h3>Desafios</h3>
        <p>{projetoTeste.challenges}</p>
      </div>

      <div className={style.about_description_text_wrapper}>
        <h3>Aprendizados</h3>
        <p>{projetoTeste.experience}</p>
      </div>

      <Link href="/projects" className={style.link_container}>
        <Image src="/arrow.svg" width={30} height={30} alt="Seta para voltar" />
        <span>Voltar para projetos</span>
      </Link>
    </>
  );
}
