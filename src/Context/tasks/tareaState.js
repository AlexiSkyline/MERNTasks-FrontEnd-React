import React, { useReducer } from 'react'
import { 
        TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINAR_TAREA } from '../Types';
import { TareaContext } from './tareaContext';
import { TareaReducer } from './tareaReducer';

export const TareaState = ( props ) => {
    
    const initialState = {
        tareas: [        
            { id: 1, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 2, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 3, nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 7, nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3 },
            { id: 8, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 9, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
            { id: 10, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 11, nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 1 },
            { id: 12, nombre: 'Elegir Hosting', estado: true, proyectoId: 5 },
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

    // TODO: Elimina un tarea 
    const eliminarTarea = ( id ) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
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
                validarTarea,
                eliminarTarea
            }}
        >
            { props.children }
        </TareaContext.Provider>
    );
}

