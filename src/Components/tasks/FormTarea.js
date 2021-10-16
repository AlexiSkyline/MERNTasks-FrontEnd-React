import React, { useContext, useState } from 'react';
import { ProyectoContext } from '../../Context/Projects/proyectoContext';
import { TareaContext } from '../../Context/tasks/tareaContext';

export const FormTarea = () => {

    // * Extrae proyectos esta activo
    const proyectosContext = useContext( ProyectoContext );
    const { proyecto } = proyectosContext;
    
    const tareasContext = useContext( TareaContext );
    const { errorTarea, agregarTarea, validarTarea } = tareasContext;

    // * State del formulario
    const [ tarea, setTarea ] = useState({
        nombre: ''
    });

    const { nombre } = tarea;

    if( !proyecto ) return null;

    // * extrae el proyecto actual
    const [proyectoActual] = proyecto;

    const handleOnChange = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        // * Validar
        // * Pasar la validación
        if( nombre.trim() === '' ) {
            validarTarea();
            return;
        }

        // * Agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea( tarea );
        
        // * Reiniciar el form
        setTarea({
            nombre: ''
        })
    }

    return (
        <div className='formulario'>
            <form
                onSubmit={ handleOnSubmit }
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className='input-text' 
                        placeholder='Nombre Tarea...'
                        name='nombre'
                        value={ nombre }
                        onChange={ handleOnChange }
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

            { errorTarea ? <p className='mensaje error'>El nombre de la tarea es Obligatorio</p> : null }
        </div>
    )
};
