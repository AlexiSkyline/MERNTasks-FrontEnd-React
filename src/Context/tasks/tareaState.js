import React, { useReducer } from 'react'
import { 
        TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA } from '../Types';
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
        tareasProyecto: null,
        errorTarea: false
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

    // TODO: Agregar tarea al proyecto Seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    };

    // TODO: valida el formulario de la nueva Tarea
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        });
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                obtenerTarea,
                agregarTarea,
                validarTarea
            }}
        >
            { props.children }
        </TareaContext.Provider>
    );
}

