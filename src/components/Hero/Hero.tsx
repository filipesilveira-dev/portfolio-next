import Image from "next/image"
import { Profile } from "../Profile/Profile"
import style from "./Hero.module.css"

export function Hero(){
    return(
        <section className={style.hero}>
            <Profile/>
            <Image src="https://placehold.co/575x375" alt="Imagem hero" width={375} height={375} unoptimized/>
        </section>
    )
}