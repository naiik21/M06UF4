import React from "react";
import { useState } from "react";

function FormulariTasques(props) {
    const [textTasca, setTextTasca] = useState('');

    const canviTextTasca = e => {
        setTextTasca(e.target.value);
    };

    // Funció per enviar el formulari i afegir una nova tasca
    const enviarForm = e => {
        e.preventDefault();
        if (textTasca.trim() !== '') {
            const tascaNova = {
                titol: textTasca,
                completada: false
            };
            props.funcAfegirTasca(tascaNova);
        }
        setTextTasca("");
    };

    return (
        <form onSubmit={enviarForm}>
            <input
                type="text"
                value={textTasca}
                onChange={canviTextTasca}
                placeholder="Afegir tasca..."
            />
            <button type="submit">Afegir</button>
        </form>)
}

export default FormulariTasques;