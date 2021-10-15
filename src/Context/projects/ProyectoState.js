import React, { useReducer } from 'react'
import uuid from 'uuid';

import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO } from '../Types';
import { ProyectoContext } from './proyectoContext';
import { proyectoReducer } from './proyectoReducer';

export const ProyectoState = ( props ) => {
    
    const proyectos = [
        { id: 1, nombre: 'Tienda Online con Laraven' },
        { id: 2, nombre: 'Clon de Instagram con Rect' },
        { id: 3, nombre: 'Clon de whatsapp con React-Native' },
    ];

    const initialState = {
        proyectos : [],
        formulario : false
    }

    // * Dispatch para ejecutar las acciones
   const [ state, dispatch ] = useReducer( proyectoReducer, initialState );

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // * obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // TODO: Agreagar nuevo Proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = Date.now();

        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        });
    }

    return (
        <ProyectoContext.Provider
                value={{
                    proyectos: state.proyectos,
                    formulario: state.formulario,
                    mostrarFormulario,
                    obtenerProyectos,
                    agregarProyecto
                }}
        >
            { props.children }
        </ProyectoContext.Provider>
    )
    }
