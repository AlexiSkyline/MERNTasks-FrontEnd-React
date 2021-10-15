import React, { useContext } from 'react'
import { ProyectoContext } from '../../Context/Projects/proyectoContext';
import { Tarea } from './Tarea';

export const ListadoTareas = () => {

    // * Estrae proyectos de state inicial
    const proyectosContext = useContext( ProyectoContext );
    const { proyecto, eliminarProyecto } = proyectosContext;

    if( !proyecto ) return <h2>Selecciona un Proyecto</h2>;

    const [ proyectoActual ] = proyecto;
    const tareasProyectos = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataforma de pago', estado: false },
        { nombre: 'Elegir Hosting', estado: true },
    ];

    return (
        <>
            <h2>Proyecto: { proyectoActual.nombre } </h2>

            <ul className="listado-tareas">
                { tareasProyectos.length === 0 
                    ? ( <li className="tarea"><p>No hay tareas</p></li> ) 
                    : ( tareasProyectos.map( tarea => (
                        <Tarea 
                            tarea={ tarea } 
                        />
                    )))
                }
            </ul>

            <button
                type='button'
                className='btn btn-primario'
                onClick={ () => eliminarProyecto( proyectoActual.id ) }
            >
                Eliminar Proyecto &times;
            </button>

        </>
    )
}
