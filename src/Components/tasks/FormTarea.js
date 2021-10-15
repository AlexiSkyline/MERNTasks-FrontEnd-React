import React, { useContext } from 'react';
import { ProyectoContext } from '../../Context/Projects/proyectoContext';

export const FormTarea = () => {

    // * Extrae proyectos esta activo
    const proyectosContext = useContext( ProyectoContext );
    const { proyecto } = proyectosContext;

    if( !proyecto ) return null;

    return (
        <div className='formulario'>
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className='input-text' 
                        placeholder='Nombre Tarea...'
                        name='nombre'
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        className='btn btn-primario btn-primario btn-block'
                        value='Agregar Tarea'
                    />
                </div>
            </form>
        </div>
    )
};
