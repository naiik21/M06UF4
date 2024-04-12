import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

import "./tasca.css";

function Tasca(props) {
    const handleEliminarTasca = () => {
        props.eliminarTasca(props.id); // Llama a eliminarTasca con el id de la tasca
    };

    const handleCompletarTasca = () => {
        props.completarTasca(props.id); // Llama a completarTasca con el id de la tasca
    };

    const completada = props.completada ? "tascaCompletada" : "tascaNoCompletada"
    return (
        <div className={completada} >
            <p onClick={handleCompletarTasca}>{props.titol}</p><button onClick={handleEliminarTasca}><TiDeleteOutline /></button>
        </div>)
}

export default Tasca;