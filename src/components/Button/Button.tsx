import style from "./Button.module.css"

interface ButtonProps{
    children: React.ReactNode
    className: string
}

export function Button({children}: ButtonProps){
    return(
        <button className={style.button}>{children}</button>
    )
}