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
    const { eliminarTarea, obtenerTarea } = tareasContext;

    // Función para eliminar tarea
    const handleEliminar = ( id ) => {
        eliminarTarea( id );
        obtenerTarea( proyectoActual.id );
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
                            >
                                Completo
                            </button>
                        )
                    : 
                        (
                            <button
                                type='button'
                                className='incompleto'
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
