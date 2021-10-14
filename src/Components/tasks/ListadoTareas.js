import React from 'react'
import { Tarea } from './Tarea';

export const ListadoTareas = () => {

    const tareasProyectos = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataforma de pago', estado: false },
        { nombre: 'Elegir Hosting', estado: true },
    ];

    return (
        <>
            <h2>Proyecto: Clon de Instagram con Rect</h2>

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
            >
                Eliminar Proyecto &times;
            </button>

        </>
    )
}
