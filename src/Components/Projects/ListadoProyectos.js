import React, { useContext, useEffect } from 'react';
import { ProyectoContext } from '../../Context/Projects/proyectoContext';

import { Proyecto } from './Proyecto';

export const ListadoProyectos = () => {

    // * Extraer peoyectos de state inicial
    const proyectosContext = useContext( ProyectoContext );
    const { proyectos, obtenerProyectos } = proyectosContext;
    
    useEffect(() => {
        obtenerProyectos();
    }, []);

    if( proyectos.length === 0 ) return  <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className='listado-proyectos'>
            { proyectos.map( proyecto => (
                <Proyecto
                    key={ proyecto.id } 
                    proyecto={ proyecto }
                />
            )) }
        </ul>
    )
}
