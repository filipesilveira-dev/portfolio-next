import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/projects";
import { notFound } from "next/navigation";

// Tipagem: params continua sendo uma Promise, característica do Next.js 15
interface Props {
  params: Promise<{ slug: string }>;
}

// Precisa ser um export de nível superior do arquivo, não uma função
// declarada dentro do componente. É essa exportação que o Next.js
// procura e chama automaticamente durante o build.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// O componente da página em si passa a ser o export default,
// recebendo "params" diretamente como prop
export default async function Project({ params }: Props) {
  const { slug } = await params;

  // Busca síncrona no array local, igual ao padrão do exemplo anterior
  const details = projects.find((project) => project.slug === slug);

  if (!details) {
    return notFound();
  }

  // Desestruturação segura, pois "details" está garantidamente definido aqui
  const {
    name,
    resume2,
    tech,
    img,
    description,
    about,
    status,
    type,
    functions,
    concepts,
    challenges,
    experience,
    url,
    deploy,
  } = details;

  return (
    <div className={style.project_section}>
      {/* Título e subtítulo */}
      <div className={style.text_wrapper}>
        <h2 className={style.title}>{name}</h2>
        <p className={style.subtitle}>{resume2}</p>
      </div>

      <div className={style.img_card_information_wrapper}>
        <div className={style.img_card_wrapper}>
          {/* Imagem */}
          <div className={style.img_wrapper}>
            <Image
              src={img}
              height={200}
              width={300}
              alt={`Imagem do prjeto ${name}`}
              title={name}
            />
          </div>
          {/* Card contendo as informações do projeto */}
          <div className={style.card_wrapper}>
            {/* Link em telas maiores */}
            <Link href="/projects" className={style.link_container_desktop}>
              <Image
                src="/arrow.svg"
                width={20}
                height={20}
                alt="Seta para voltar"
              />
              <span>Voltar para projetos</span>
            </Link>

            <div className={style.card_container}>
              <h3>Informações</h3>
              <div className={style.tech_container}>
                <h4>Tecnologias</h4>
                <div className={style.tech_wrapper}>
                  {tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={style.status_container}>
                <h4>Status</h4>
                <span>{status}</span>
              </div>
              <div className={style.type_container}>
                <h4>Tipo</h4>
                <span>{type}</span>
              </div>
              <div className={style.btn_container}>
                {deploy && (
                  <a href={deploy} target="_blank" rel="noopener noreferrer" title={name}>
                    Ver projeto publicado
                  </a>
                )}
                <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
                  Ver no GitHub
                </a>
              </div>
            </div>
            {/* Fim do Card com as informações */}
          </div>
        </div>

        <div className={style.information_wrapper}>
          {/* Título e subtítulo telas maiores */}
          <div className={style.text_wrapper_desktop}>
            <h2 className={style.title}>{name}</h2>
            <p className={style.subtitle}>{resume2}</p>
          </div>

          {/* Imagem do projeto em telas maiores */}
          <div className={style.img_container}>
            <Image
              src={img}
              height={200}
              width={303}
              alt={`Imagem do prjeto ${name}`}
              title={name}
              className={style.img_desktop}
            />
          </div>

          {/* Imagem para telas a partir de 992px */}
          <div className={style.img_container_desktop}>
            <Image
              src={img}
              height={400}
              width={606}
              alt={`Imagem do prjeto ${name}`}
              title={name}
              className={style.img_desktop}
            />
          </div>

          <div className={style.about_description_text_wrapper}>
            <h3>Sobre</h3>
            <p>{about}</p>
          </div>
          <div className={style.about_description_text_wrapper}>
            <h3>Descrição</h3>
            <p>{description}</p>
          </div>
          <div className={style.function_container}>
            <h3>Funcionalidades</h3>
            {functions.map((f) => (
              <div key={f.function} className={style.function_wrapper}>
                <h4>{f.function}</h4>
                <p>{f.subtitle}</p>
              </div>
            ))}
          </div>
          <div className={style.concepts_container}>
            <h3>Conceitos aplicados</h3>
            <div className={style.concepts_wrapper}>
              {concepts.map((concept) => (
                <span key={concept}>{concept}</span>
              ))}
            </div>
          </div>
          <div className={style.about_description_text_wrapper}>
            <h3>Desafios</h3>
            <p>{challenges}</p>
          </div>
          <div className={style.about_description_text_wrapper}>
            <h3>Aprendizados</h3>
            <p>{experience}</p>
          </div>
        </div>
      </div>

      <Link href="/projects" className={style.link_container}>
        <Image src="/arrow.svg" width={30} height={30} alt="Seta para voltar" />
        <span>Voltar para projetos</span>
      </Link>
    </div>
  );
}