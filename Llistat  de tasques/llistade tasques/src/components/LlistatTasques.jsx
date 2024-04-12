import React from "react";
import { useState } from "react";
import Tasca from "./Tasca";
import FormulariTasques from "./formulariTasques";

function LlistatTasques(props) {
    const [tasques, setTasques] = useState([]);

    // Funció per afegir una nova tasca
    const afegirTasca = tasca => {
        const tasquesActuals = [...tasques, { id: tasques.length, titol: tasca.titol, completada: false }];
        setTasques(tasquesActuals);
    };

    // Funció per eliminar una tasca
    const eliminarTasca = id => {
        console.log(id)
        const tasquesRestants = tasques.filter(tasca => tasca.id !== id);
        setTasques(tasquesRestants);
    };

    // Funció per marcar una tasca com a completada o no completada
    const completarTasca = id => {
        console.log(id)
        const tasquesActuals = tasques.map(tasca =>
            tasca.id === id ? { ...tasca, completada: !tasca.completada } : tasca
        );
        setTasques(tasquesActuals);
    };

    return (<div>
        <FormulariTasques funcAfegirTasca={afegirTasca} />
        {tasques.map(tasca => (
            <Tasca
                key={tasca.id}
                id={tasca.id}
                titol={tasca.titol}
                completada={tasca.completada}
                eliminarTasca={eliminarTasca}
                completarTasca={completarTasca}
            />
        ))}

    </div>)
}

export default LlistatTasques;