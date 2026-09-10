import Image from "next/image"
import { Profile } from "../Profile/Profile"
import style from "./Hero.module.css"

export function Hero(){
    return(
        <section className={style.hero}>
            <Profile/>

            <div className={style.img_wrapper}>
                <Image src="/heroAlt-light.avif" alt="Imagem hero" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill unoptimized/>
            </div>
        </section>
    )
}