// import styles from "./page.module.css";

import Tech from "@/components/Technologies/Tech";
import { Hero } from "../components/Hero/Hero";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Tech/>
      <Projects/>
    </>
  );
}
