import React, { useReducer } from 'react';
import { clienteAxios } from '../../Components/config/axios';
import { 
        TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINAR_TAREA,
        // ESTADO_TAREA,
        TAREA_ACTUAL,
        ACTUALIZAR_TAREA,
        LIMPIAR_TAREA } from '../Types';
import { TareaContext } from './tareaContext';
import { TareaReducer } from './tareaReducer';

export const TareaState = ( props ) => {
    
    const initialState = {
        tareasProyecto: [],
        errorTarea: false,
        tareaSeleccionada: null
    };

    // * Crear dispatch y state
    const [ state, dispatch ] = useReducer( TareaReducer, initialState );

    // * Crear las funciones
    // TODO: Obtener las tareas de un proyecto
    const obtenerTarea = async( proyecto ) => {
        try {
            const resultado = await clienteAxios.get( '/api/tareas', { params: { proyecto } } );
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            });
        } catch (error) {
            console.log( error );
        }
    };

    // TODO: Agregar tarea al proyecto Seleccionado
    const agregarTarea = async ( tarea ) => {
        try {
            await clienteAxios.post( '/api/tareas', tarea );
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            });
        } catch (error) {
            console.log( error );
        }
    };

    // TODO: valida el formulario de la nueva Tarea
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        });
    }

    // TODO: Elimina un tarea 
    const eliminarTarea = async ( id, proyecto ) => {
        try {
            await clienteAxios.delete( `/api/tareas/${ id }`, { params: { proyecto } } );
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            });
        } catch (error) {
            console.log( error );
        }
    }

    // TODO: Cambia el estado de casa tarea
    // const cambiarEstadoTarea  = tarea => {
    //     dispatch({
    //         type: ESTADO_TAREA,
    //         payload: tarea
    //     });
    // }

    // TODO: Edita o modifica la tarea 
      const actualizarTarea = async ( tarea ) => {
        try {
            const resultado = await clienteAxios.put( `/api/tareas/${tarea._id}`, tarea );
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            });
        } catch (error) {
            console.log( error );
        }
    }
    
    // TODO: Extrae una tarea para edición
    const guardarTareaActual = ( tarea ) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    // TODO: Elimina la tarea Seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        });
    }
    
    return (
        <TareaContext.Provider
            value={{
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTarea,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            { props.children }
        </TareaContext.Provider>
    );
}

