import React from 'react'
import { Proyecto } from './Proyecto';

export const ListadoProyectos = () => {

    const proyectos = [
        { nombre: 'Tienda Online con Laraven' },
        { nombre: 'Clon de Instagram con Rect' },
        { nombre: 'Clon de whatsapp con React-Native' },
    ];
    return (
        <ul className='listado-proyectos'>
            { proyectos.map( proyecto => (
                <Proyecto 
                    proyecto={ proyecto }
                />
            )) }
        </ul>
    )
}
