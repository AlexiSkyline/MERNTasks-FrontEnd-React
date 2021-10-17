import { useContext } from 'react';
import { ProyectoContext } from '../../Context/Projects/proyectoContext';
import { TareaContext } from '../../Context/tasks/tareaContext';

export const Tarea = ({ tarea }) => {

    // * Extraer peoyectos de state inicial
    const proyectosContext = useContext( ProyectoContext );
    const { proyecto } = proyectosContext; 

    const [ proyectoActual ] = proyecto;

    // * Obtener la función del context de tarea
    const tareasContext = useContext( TareaContext );
    const { eliminarTarea, obtenerTarea, cambiarEstadoTarea } = tareasContext;

    // Función para eliminar tarea
    const handleEliminar = ( id ) => {
        eliminarTarea( id );
        obtenerTarea( proyectoActual.id );
    }

    // * Función que modifica el estado de las tareas
    const cambiarEstado = ( tarea ) => {
        if( tarea.estado ) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }

        cambiarEstadoTarea( tarea );
    } 

    return (
        <li className="tarea sombra">
            <p>{ tarea.nombre }</p>

            <div className="estado">
                { tarea.estado 
                    ?
                        (
                            <button
                                type='button'
                                className='completo'
                                onClick={ () => cambiarEstado( tarea ) }
                            >
                                Completo
                            </button>
                        )
                    : 
                        (
                            <button
                                type='button'
                                className='incompleto'
                                onClick={ () => cambiarEstado( tarea ) }
                            >
                                Incompleto
                            </button>
                        )   
                }
            </div>

            <div className="acciones">
                <button 
                    type='button'
                    className="btn btn-primario"
                >
                    Editar
                </button>
                
                <button 
                    type='button'
                    className="btn btn-secundario"
                    onClick={ () => handleEliminar( tarea.id ) }
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}
