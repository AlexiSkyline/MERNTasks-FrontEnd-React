import React, { useReducer } from 'react'
import { clienteAxios } from '../../Components/config/axios';

import { FORMULARIO_PROYECTO, 
         OBTENER_PROYECTOS, 
         AGREGAR_PROYECTO,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL,
         ELIMINAR_PROYECTO } from '../Types';
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
        formulario : false,
        errorFormulario: false,
        proyecto: null
    }

    // * Dispatch para ejecutar las acciones
   const [ state, dispatch ] = useReducer( proyectoReducer, initialState );

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    // * obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        });
    }

    // TODO: Agreagar nuevo Proyecto
    const agregarProyecto = async ( proyecto ) => {
        try {
            const resultado = await clienteAxios.post( '/api/proyectos', proyecto );
            console.log( resultado );
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            });
        } catch( error ) {
            console.log( error );
        }
    };

    // TODO: Validamos el error 
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    }

    // * Selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        });
    }

    // TODO: eliminar un proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        });
    }
    
    return (
        <ProyectoContext.Provider
                value={{
                    proyectos: state.proyectos,
                    formulario: state.formulario,
                    errorFormulario: state.errorFormulario,
                    proyecto: state.proyecto,
                    mostrarFormulario,
                    obtenerProyectos,
                    agregarProyecto,
                    mostrarError,
                    proyectoActual,
                    eliminarProyecto
                }}
        >
            { props.children }
        </ProyectoContext.Provider>
    )
    }
