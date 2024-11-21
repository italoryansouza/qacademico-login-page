import style from './button.module.css'

function MyButton({textoBotao}){
    return(
        <button className={style.buttonClass}>{textoBotao}</button>
    )
}

export default MyButton;