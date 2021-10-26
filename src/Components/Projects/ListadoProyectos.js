import React, { useContext, useEffect } from 'react';
import { ProyectoContext } from '../../Context/Projects/proyectoContext';

import { Proyecto } from './Proyecto';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AlertaContext } from '../../Context/alerta/alertaContext';

export const ListadoProyectos = () => {

    // * Extraer peoyectos de state inicial
    const proyectosContext = useContext( ProyectoContext );
    const { proyectos, mensaje, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext( AlertaContext );
    const { alerta, mostrarAlerta } = alertaContext;
    
    useEffect(() => {

        if( mensaje ) {
            mostrarAlerta( mensaje.msg, mensaje.categoria );
        }

        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);

    if( proyectos.length === 0 ) return  <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className='listado-proyectos'>
            { alerta && (<div className={ `alerta ${ alerta.categoria }` }>{ alerta.msg }</div>) }

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
