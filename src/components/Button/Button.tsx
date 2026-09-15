import style from "./Button.module.css"

interface ButtonProps{
    children: React.ReactNode
    className?: string
    onClick?: ()=> void
}

export function Button({children, onClick}: ButtonProps){
    return(
        <button onClick={onClick} className={style.button}>{children}</button>
    )
}