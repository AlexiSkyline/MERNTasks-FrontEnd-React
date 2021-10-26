import React, { useReducer } from 'react'
import { clienteAxios } from '../../Components/config/axios';

import { FORMULARIO_PROYECTO, 
         OBTENER_PROYECTOS, 
         AGREGAR_PROYECTO,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL,
         ELIMINAR_PROYECTO, 
         PROYECTO_ERROR } from '../Types';
import { ProyectoContext } from './proyectoContext';
import { proyectoReducer } from './proyectoReducer';

export const ProyectoState = ( props ) => {
    
    const initialState = {
        proyectos : [],
        formulario : false,
        errorFormulario: false,
        proyecto: null,
        mensaje: null
    }

    // * Dispatch para ejecutar las acciones
   const [ state, dispatch ] = useReducer( proyectoReducer, initialState );

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    // * obtener los proyectos
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get( '/api/proyectos' );
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            });
        }
    }

    // TODO: Agreagar nuevo Proyecto
    const agregarProyecto = async ( proyecto ) => {
        try {
            const resultado = await clienteAxios.post( '/api/proyectos', proyecto );
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            });
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
    const eliminarProyecto = async ( proyectoId ) => {
        try {
            await clienteAxios.delete( `/api/proyectos/${ proyectoId }` );
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            });
        }
    }
    
    return (
        <ProyectoContext.Provider
                value={{
                    proyectos: state.proyectos,
                    formulario: state.formulario,
                    errorFormulario: state.errorFormulario,
                    proyecto: state.proyecto,
                    mensaje: state.mensaje,
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
