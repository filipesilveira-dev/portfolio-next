"use client";

import Card from "@/components/Card/Card";
import Contact from "@/components/Contact/Contact";
import { projects } from "@/utils/projects";
import style from "./page.module.css";
import { useState } from "react";
import { EmptySytate } from "@/components/Empty State/EmptyState";
import { AnimatePresence, motion } from "motion/react";

export default function Projects() {
  const [isMoreProjects, setIsMoreProjects] = useState(false);
  return (
    <>
      <div className={style.text_wrapper}>
        <h2 className={style.title}>
          <span>Projetos</span> Desenvolvidos
        </h2>
        <p className={style.subtitle}>
          Uma seleção dos meus principais projetos, experimentos e exercícios
          front-end.
        </p>
      </div>

      <h3 className={style.title_main_projects}>Principais Projetos</h3>
      <div className={style.main_projects_section}>
        <div className={style.cards}>
          {projects.map((project) => (
            <div className={style.card} key={project.id}>
              <Card
                img={project.img}
                name={project.name}
                resume={project.resume}
                tech={project.tech}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isMoreProjects && (
          <motion.div
            className={style.dropdown}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <>
              <h3 className={style.title_main_projects}>Mais Projetos</h3>
              <div className={style.empty_state}>
                <EmptySytate />
              </div>
            </>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={style.btn_container}>
        <span onClick={() => setIsMoreProjects(!isMoreProjects)}>
          {isMoreProjects ? "Menos projetos" : "Mais projetos"}
        </span>
      </div>
      <Contact />
    </>
  );
}
