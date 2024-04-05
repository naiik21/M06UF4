import React from "react";

import "./boto.css"

function Boto(props) {
    const clase = props.esClick ? 'btnClick' : 'btnReiniciar';    //const classBoto = esClick = true ? classBoto = btnClick : classBoto = btnReiniciar
    return (<bottom className={clase} onClick={props.onClick}>
        {props.text}
    </bottom>)
}

export default Boto;
// const Boto =({text, onClick, esClick})=>{
//     const classBoto= esClick=true ? classBoto=btnClick : classBoto=btnReiniciar
// }