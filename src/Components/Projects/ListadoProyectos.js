import React, { useContext, useEffect } from 'react';
import { ProyectoContext } from '../../Context/Projects/proyectoContext';

import { Proyecto } from './Proyecto';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const ListadoProyectos = () => {

    // * Extraer peoyectos de state inicial
    const proyectosContext = useContext( ProyectoContext );
    const { proyectos, obtenerProyectos } = proyectosContext;
    
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);

    if( proyectos.length === 0 ) return  <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className='listado-proyectos'>
            <TransitionGroup>
                { proyectos.map( proyecto => (
                    <CSSTransition
                        key={ proyecto._id }
                        timeout={ 200 }
                        classNames='proyecto'
                    >
                        <Proyecto 
                            proyecto={ proyecto }
                        />
                    </CSSTransition>
                )) }
            </TransitionGroup>
        </ul>
    )
}
