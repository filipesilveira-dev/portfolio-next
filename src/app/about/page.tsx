"use client";

import { Button } from "@/components/Button/Button";
import Contact from "@/components/Contact/Contact";
import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function About() {
  const [isMoreStudy, setIsMoreStudy] = useState(false);
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  return (
    <>
      <div className={style.about_container}>
        <div className={style.hero_container}>
          <div className={style.hero}>
            <Image
              src="/photo.png"
              alt="Foto Filipe"
              width={150}
              height={150}
            />
            <div className={style.image_label_wrapper}>
              <h3>Filipe P. Silveira</h3>
              <span>Desenvolvedor Front-end</span>
            </div>
            <Link href="/contact">
              <Button>Contatar</Button>
            </Link>
          </div>

          <div className={style.hero_text_wrapper}>
            <div className={style.hero_paragraph}>
              <p className={style.short_resume}>
                React | Next.js | TypeScript | JavaScript | HTML5 | CSS3 |
                Construindo interfaces web e soluções práticas
              </p>
              <div className={style.long_resume}>
                <h2>
                  Olá, eu sou o <span>Filipe P. Silveira</span>!
                </h2>
                <p>
                  Curso <strong>Análise e Desenvolvimento de Sistemas</strong> e
                  estou em transição de carreira para a área de Desenvolvimento
                  Web, com foco atual em Front-end. Desde janeiro de 2025, venho
                  construindo minha formação na área por meio de estudos
                  contínuos e, principalmente, da aplicação prática dos
                  conhecimentos em projetos.
                </p>

                <AnimatePresence>
                  {isBioExpanded && (
                    <motion.div
                      className={style.bio_expanded_content}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p>
                        <br /> Tenho desenvolvido habilidades em{" "}
                        <strong>
                          HTML5, CSS3, JavaScript, TypeScript, React e Next.js
                        </strong>
                        , buscando compreender não apenas as tecnologias, mas
                        também como elas podem contribuir para a construção de
                        soluções práticas para problemas reais.
                      </p>
                      <p>
                        <br /> Antes da transição para tecnologia, sou graduado
                        em Psicologia pela Universidade Federal do Ceará (UFC),
                        com experiência em diferentes contextos profissionais, o
                        que contribuiu para o desenvolvimento de Soft Skills
                        como{" "}
                        <strong>
                          comunicação clara, empatia, colaboração
                          interdisciplinar, pensamento analítico, resiliência,
                          capacidade de adaptação, curiosidade e disposição para
                          aprender continuamente
                        </strong>
                        . Procuro levar essas competências para a forma como
                        abordo problemas, trabalho em equipe e busco soluções
                        práticas.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  className={style.see_more_btn}
                  onClick={() => setIsBioExpanded(!isBioExpanded)}
                >
                  {isBioExpanded ? "Ver menos ↑" : "Ver mais ↓"}
                </button>
              </div>
            </div>
            <div className={style.hero_span_list}>
              <span>1.5 anos exp</span>
              <span>10+ projetos</span>
              <span>Futuro Full Stack Python</span>
            </div>
          </div>
        </div>

        <div className={style.professional_background_wrap}>
          <div className={style.trajectory_title_wrapper}>
            <h3 className={style.section_title}>
              Minha <span>Trajetória</span>
            </h3>
          </div>
          <div className={style.professional_background}>
            {/* Wrapper dos marcos da trajetória */}
            <div className={style.path_list_wrapper}>
              {/* Projetos pessoais */}
              <div className={style.professional_background_item}>
                <span className={style.timeline_dot}></span>
                <Image
                  src="/idea.svg"
                  alt="Imagem de capelo"
                  width={40}
                  height={40}
                />
                <div className={style.background_item_text_wrapper}>
                  <h4>Projetos pessoais</h4>
                  <span>Dice roller</span>
                  <span>Balance Me</span>
                  <span>Portfólio (primeira versão)</span>
                  <span>Reflect Me - em andamento</span>
                </div>
              </div>
              {/* Linha tracejada */}
              <div className={style.linha_tracejada_vertical_container_pai}>
                <div className={style.linha_tracejada_vertical_container}>
                  <div className={style.linha_tracejada_vertical}></div>
                </div>
              </div>
              {/* Desenvolvedor Front-end */}
              <div className={style.professional_background_item}>
                <span className={style.timeline_dot}></span>
                <Image
                  src="/academy.svg"
                  alt="Imagem de capelo"
                  width={40}
                  height={40}
                />
                <div className={style.background_item_text_wrapper}>
                  <h4>Desenvolvedor Front-end (EBAC)</h4>
                  <span>Agosto/2026</span>
                  <span>Carga horária: 37hs</span>
                </div>
              </div>
              {/* Linha tracejada */}
              <div className={style.linha_tracejada_vertical_container_pai}>
                <div className={style.linha_tracejada_vertical_container}>
                  <div className={style.linha_tracejada_vertical}></div>
                </div>
              </div>
              {/* Bootcamp 2 */}
              <div className={style.professional_background_item}>
                <span className={style.timeline_dot}></span>
                <Image
                  src="/study.svg"
                  alt="Imagem de capelo"
                  width={40}
                  height={40}
                />
                <div className={style.background_item_text_wrapper}>
                  <h4>Bootcamp Santander - 2026 AI React Fron-end (DIO)</h4>
                  <span>Julho/2026</span>
                  <span>Carga horária: 42hs</span>
                </div>
              </div>
              {/* Linha tracejada */}
              <div className={style.linha_tracejada_vertical_container_pai}>
                <div className={style.linha_tracejada_vertical_container}>
                  <div className={style.linha_tracejada_vertical}></div>
                </div>
              </div>
              {/* Análise e Desenvolvimento de Sistemas */}
              <div className={style.professional_background_item}>
                <span className={style.timeline_dot}></span>
                <Image
                  src="/academy.svg"
                  alt="Imagem de capelo"
                  width={40}
                  height={40}
                />
                <div className={style.background_item_text_wrapper}>
                  <h4>Análise e desenvolvimento de sistemas (Estácio)</h4>
                  <span>Início: Agosto/2025</span>
                  <span>Término: Janeiro/2028 (previsão)</span>
                </div>
              </div>
              {/* Linha tracejada */}
              <div className={style.linha_tracejada_vertical_container_pai}>
                <div className={style.linha_tracejada_vertical_container}>
                  <div className={style.linha_tracejada_vertical}></div>
                </div>
              </div>
              {/* Bootcamp 1 */}
              <div className={style.professional_background_item}>
                <span className={style.timeline_dot}></span>
                <Image
                  src="/study.svg"
                  alt="Imagem de capelo"
                  width={40}
                  height={40}
                />
                <div className={style.background_item_text_wrapper}>
                  <h4>Bootcamp Santander 2025 - Front-end (DIO)</h4>
                  <span>Agosto/2025</span>
                  <span>Carga horária: 102hs</span>
                </div>
              </div>
              {/* Linha tracejada */}
              <div className={style.linha_tracejada_vertical_container_pai}>
                <div className={style.linha_tracejada_vertical_container}>
                  <div className={style.linha_tracejada_vertical}></div>
                </div>
              </div>
              {/* EBAC */}
              <div className={style.professional_background_item}>
                <span className={style.timeline_dot}></span>
                <Image
                  src="/study.svg"
                  alt="Imagem de capelo"
                  width={40}
                  height={40}
                />
                <div className={style.background_item_text_wrapper}>
                  <h4>Profissão: TI do Zero ao Pro (EBAC)</h4>
                  <span>Março/2025</span>
                  <span>Carga horária: 10hs</span>
                </div>
              </div>
              {/* Linha tracejada */}
              <div className={style.linha_tracejada_vertical_container_pai}>
                <div className={style.linha_tracejada_vertical_container}>
                  <div className={style.linha_tracejada_vertical}></div>
                </div>
              </div>
              {/* EBAC */}
              <div className={style.professional_background_item}>
                <span className={style.timeline_dot}></span>
                <Image
                  src="/study.svg"
                  alt="Imagem de capelo"
                  width={40}
                  height={40}
                />
                <div className={style.background_item_text_wrapper}>
                  <h4>Introdução à Programação (EBAC)</h4>
                  <span>Fevereiro/2025</span>
                  <span>Carga horária: 18hs</span>
                </div>
              </div>
              {/* Linha tracejada */}
              <div className={style.linha_tracejada_vertical_container_pai}>
                <div className={style.linha_tracejada_vertical_container}>
                  <div className={style.linha_tracejada_vertical}></div>
                </div>
              </div>
              {/* Alura */}
              <div className={style.professional_background_item}>
                <span className={style.timeline_dot}></span>
                <Image
                  src="/study.svg"
                  alt="Imagem de capelo"
                  width={40}
                  height={40}
                />
                <div className={style.background_item_text_wrapper}>
                  <h4>Imersão Front-end 2ª edição (Alura)</h4>
                  <span>Fevereiro/2025</span>
                  <span>Carga horária: 5hs</span>
                </div>
              </div>
              {/* Linha tracejada */}
              <div className={style.linha_tracejada_vertical_container_pai}>
                <div className={style.linha_tracejada_vertical_container}>
                  <div className={style.linha_tracejada_vertical}></div>
                </div>
              </div>
              {/* Alura */}
              <div className={style.professional_background_item}>
                <span className={style.timeline_dot}></span>
                <Image
                  src="/study.svg"
                  alt="Imagem de capelo"
                  width={40}
                  height={40}
                />
                <div className={style.background_item_text_wrapper}>
                  <h4>HTML e CSS (Alura)</h4>
                  <span>Janeiro/2025</span>
                  <span>Carga horária: 8hs</span>
                  <span>
                    Ambientes de desenvolvimento, estrutura de arquivos e tags
                  </span>
                </div>
              </div>
              {/* Linha tracejada */}
              <div className={style.linha_tracejada_vertical_container_pai}>
                <div className={style.linha_tracejada_vertical_container}>
                  <div className={style.linha_tracejada_vertical}></div>
                </div>
              </div>
              {/* Casa de Cultura Britânica */}
              <div className={style.professional_background_item}>
                <span className={style.timeline_dot}></span>
                <Image
                  src="/language.svg"
                  alt="Imagem de capelo"
                  width={40}
                  height={40}
                />
                <div className={style.background_item_text_wrapper}>
                  <h4>Casa de Cultura Britânica</h4>
                  <span>Dezembro/2018</span>
                  <span>Inglês Intermediário (B1)</span>
                </div>
              </div>
            </div>

            {/* Animação de "Minha bagagem na Psicologia" ao clicar em "O que fiz antes" */}
            <AnimatePresence>
              {isMoreStudy && (
                <motion.div
                  className={style.dropdown}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className={style.more_study_container}>
                    <h3 className={style.section_title}>
                      Minha bagagem na <span>Psicologia</span>
                    </h3>
                    <div className={style.psychology_list_wrapper}>
                      <div className={style.professional_background_item}>
                        <span className={style.timeline_dot}></span>
                        <Image
                          src="/work.svg"
                          alt="Imagem de capelo"
                          width={40}
                          height={40}
                        />
                        <div className={style.background_item_text_wrapper}>
                          <h4>Psicólogo Clínico Autônomo</h4>
                          <span>Início: agosto/2017</span>
                          <span>Fim: até o momento</span>
                          <span>
                            <strong>Soft skills:</strong> visão de negócios,
                            autogestão, comprometimento, capacidade analítica,
                            resolubilidade, comunicação e empatia
                          </span>
                        </div>
                      </div>
                      {/* Linha tracejada */}
                      <div
                        className={style.linha_tracejada_vertical_container_pai}
                      >
                        <div
                          className={style.linha_tracejada_vertical_container}
                        >
                          <div className={style.linha_tracejada_vertical}></div>
                        </div>
                      </div>
                      <div className={style.professional_background_item}>
                        <span className={style.timeline_dot}></span>
                        <Image
                          src="/work.svg"
                          alt="Imagem de capelo"
                          width={40}
                          height={40}
                        />
                        <div className={style.background_item_text_wrapper}>
                          <h4>
                            Psicólogo Hospitalar em Hospital Leonardo da Vinci
                            (HELV)
                          </h4>
                          <span>Início: março/2023</span>
                          <span>Fim: janeiro/2025</span>
                          <span>
                            <strong>Soft skills:</strong> comprometimento,
                            capacidade analítica, resolubilidade, comunicação e
                            empatia
                          </span>
                        </div>
                      </div>
                      {/* Linha tracejada */}
                      <div
                        className={style.linha_tracejada_vertical_container_pai}
                      >
                        <div
                          className={style.linha_tracejada_vertical_container}
                        >
                          <div className={style.linha_tracejada_vertical}></div>
                        </div>
                      </div>
                      <div className={style.professional_background_item}>
                        <span className={style.timeline_dot}></span>
                        <Image
                          src="/work.svg"
                          alt="Imagem de capelo"
                          width={40}
                          height={40}
                        />
                        <div className={style.background_item_text_wrapper}>
                          <h4>
                            Psicólogo da Saúde em Secretaria Municipal de
                            Fortaleza
                          </h4>
                          <span>Início: março/2020</span>
                          <span>Fim: março/2022</span>
                          <span>
                            <strong>Soft skills: </strong>comprometimento,
                            capacidade analítica, resolubilidade, comunicação e
                            empatia
                          </span>
                        </div>
                      </div>
                      {/* Linha tracejada */}
                      <div
                        className={style.linha_tracejada_vertical_container_pai}
                      >
                        <div
                          className={style.linha_tracejada_vertical_container}
                        >
                          <div className={style.linha_tracejada_vertical}></div>
                        </div>
                      </div>
                      {/* Estágio */}
                      <div className={style.professional_background_item}>
                        <span className={style.timeline_dot}></span>
                        <Image
                          src="/work.svg"
                          alt="Imagem de capelo"
                          width={40}
                          height={40}
                        />
                        <div className={style.background_item_text_wrapper}>
                          <h4>Estágio em Psicologia (COGEP)</h4>
                          <span>Início: setembro/2014</span>
                          <span>Fim: fevereiro/2016</span>
                          <span>
                            <strong>Soft skills:</strong> resolubilidade,
                            comunicação e empatia
                          </span>
                        </div>
                      </div>
                      {/* Linha tracejada */}
                      <div
                        className={style.linha_tracejada_vertical_container_pai}
                      >
                        <div
                          className={style.linha_tracejada_vertical_container}
                        >
                          <div className={style.linha_tracejada_vertical}></div>
                        </div>
                      </div>
                      <div className={style.professional_background_item}>
                        <span className={style.timeline_dot}></span>
                        <Image
                          src="/academy.svg"
                          alt="Imagem de capelo"
                          width={40}
                          height={40}
                        />
                        <div className={style.background_item_text_wrapper}>
                          <h4>Bacharelado em Psicologia</h4>
                          <span>Início: agosto/2011</span>
                          <span>Fim: março/2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className={style.btn_container}>
              <span onClick={() => setIsMoreStudy(!isMoreStudy)}>
                {isMoreStudy ? "Menos ↑" : "O que fiz antes?"}
              </span>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
