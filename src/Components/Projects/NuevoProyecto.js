import React, { useState } from 'react'

export const NuevoProyecto = () => {

    // * State para Proyecto
    const [ proyecto, setProyecto ] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    // TODO: Lee los contenidos del input
    const handleOnChange = ( e ) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    } 

    // TODO: Cuando el usuario envia un proyecto
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validar el proyecto

        // agregar el state

        // Reiniciar el form
    }

    return (
        <>
            <button 
                type='button'
                className='btn btn-block btn-primario'
                onSubmit={ handleSubmit }
            >
                Nuevo Proyecto
            </button>

            <form 
                className="formulario-nuevo-proyecto"
            >
                <input 
                    type="text" 
                    className="input-text" 
                    placeholder='Nombre Proyecto'
                    name='nombre'
                    value={ nombre }
                    onClick={ handleOnChange }
                />

                <input 
                    type="submit" 
                    className='btn btn-primario btn-block' 
                    value="Agregar Proyecto" 
                />
            </form>
        </>
    )
}
