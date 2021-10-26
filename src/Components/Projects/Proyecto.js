import React,{ useContext } from 'react';
import { ProyectoContext } from '../../Context/Projects/proyectoContext';
import { TareaContext } from '../../Context/tasks/tareaContext';

export const Proyecto = ({ proyecto }) => {

    const proyectosContext = useContext( ProyectoContext );
    const { proyectoActual } = proyectosContext;

    const tareasContext = useContext( TareaContext );
    const { obtenerTarea } = tareasContext; 

    // TODO: Función para agregar el proyecto actual
    const handleOnClick = ( id ) => {
        proyectoActual( id ); //* Fija el proyecto actual
        obtenerTarea( id ); //* Toma el id del proyecto para filtrar solo las tareas de ese Proyecto
    }

    return (
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={ () => handleOnClick( proyecto._id )}
            >
                { proyecto.nombre }
            </button>
        </li>
    )
}
