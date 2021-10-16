import React, { useContext, useReducer } from 'react'
import { TAREAS_PROYECTO } from '../Types';
import { TareaContext } from './tareaContext';
import { TareaReducer } from './tareaReducer';

export const TareaState = ( props ) => {
    
    const initialState = {
        tareas: [        
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 1 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 5 },
        ],
        tareasProyecto: null
    };

    // * Crear dispatch y state
    const [ state, dispatch ] = useReducer( TareaReducer, initialState );

    // * Crear las funciones
    // TODO: Obtener las tareas de un proyecto
    const obtenerTarea = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    };

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                obtenerTarea
            }}
        >
            { props.children }
        </TareaContext.Provider>
    )
}

