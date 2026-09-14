// import styles from "./page.module.css";

import Tech from "@/components/Technologies/Tech";
import { Hero } from "../components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Tech/>
      <Projects/>
      <Contact/>
    </>
  );
}
