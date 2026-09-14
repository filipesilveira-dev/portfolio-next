"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import Card from "../Card/Card";
import { projects } from "@/utils/projects";
import style from "./Projects.module.css";

// Import Swiper core styles
import "swiper/css";

export interface Projeto {
  id: number;
  img: string;
  name: string;
  resume: string;
  tech: string[];
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className={style.projects_section} aria-label="Projetos em destaque">
      <div className={style.projets_section_title_wrapper}>
        <h2>Projetos em destaque</h2>
        <Link className={style.projects_link} href="/projects">
          Ver todos{" "}
          <Image src="/arrow.svg" width={20} height={20} alt="Imagem de seta" />
        </Link>
      </div>

      <div className={style.slider_container}>
        {/* Seta de navegação para a esquerda */}
        <button
          type="button"
          className={`${style.arrow_btn} ${style.arrow_prev}`}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Slide anterior"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Slider Swiper com suporte a gestos de toque / arrasto */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          rewind={true}
          grabCursor={true}
          simulateTouch={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex ?? swiper.activeIndex);
          }}
          onBreakpoint={(swiper) => {
            setActiveIndex(swiper.realIndex ?? swiper.activeIndex);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className={style.swiper}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className={style.swiper_slide}>
              <Card
                img={project.img}
                name={project.name}
                resume={project.resume}
                tech={project.tech}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Seta de navegação para a direita */}
        <button
          type="button"
          className={`${style.arrow_btn} ${style.arrow_next}`}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Próximo slide"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Bolinhas de navegação mapeadas com .map(), sincronizadas com o card ativo */}
      <div
        className={style.dots_container}
        role="tablist"
        aria-label="Bolinhas de navegação dos projetos"
      >
        {projects.map((project, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Ir para o projeto ${project.name}`}
              className={`${style.dot} ${isActive ? style.dot_active : ""}`}
              onClick={() => {
                swiperRef.current?.slideTo(index);
                setActiveIndex(index);
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
