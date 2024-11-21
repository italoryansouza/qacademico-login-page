import style from './input.module.css'

function Inputs({nome}){
    return(
        <input type="text" placeholder={nome} className={style.input}/>
    );
};

export default Inputs;