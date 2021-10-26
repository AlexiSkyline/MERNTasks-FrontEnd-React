import React, { useContext } from 'react'
import { ProyectoContext } from '../../Context/Projects/proyectoContext';
import { TareaContext } from '../../Context/tasks/tareaContext';
import { Tarea } from './Tarea';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const ListadoTareas = () => {

    // * Estrae proyectos de state inicial
    const proyectosContext = useContext( ProyectoContext );
    const { proyecto, eliminarProyecto } = proyectosContext;

    // * Obtener Las tareas del proyecto
    const tareasContext = useContext( TareaContext );
    const { tareasProyecto } = tareasContext;

    if( !proyecto ) return <h2>Selecciona un Proyecto</h2>;

    const [ proyectoActual ] = proyecto;

    return (
        <>
            <h2>Proyecto: { proyectoActual.nombre } </h2>

            <ul className="listado-tareas">
                { tareasProyecto.length === 0 
                    ? ( <li className="tarea"><p>No hay tareas</p></li> ) 
                    : <TransitionGroup>
                        {
                            tareasProyecto.map( tarea => (
                                <CSSTransition
                                    key={ tarea.id }
                                    timeout={ 200 }
                                    classNames='tarea'
                                >
                                    <Tarea 
                                        tarea={ tarea } 
                                    />
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                }
            </ul>

            <button
                type='button'
                className='btn btn-primario'
                onClick={ () => eliminarProyecto( proyectoActual._id ) }
            >
                Eliminar Proyecto &times;
            </button>

        </>
    );
}
