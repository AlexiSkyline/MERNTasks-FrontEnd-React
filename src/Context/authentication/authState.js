import React, { useReducer } from 'react';
import { clienteAxios } from "../../Components/config/axios";
import { tokenAuth } from '../../Components/config/tokenAuth';
import { CERRAR_SESION, LOGIN_ERROR, LOGIN_EXITOSO, OBTENER_USUARIO, REGISTRO_ERROR, REGISTRO_EXITOSO } from "../Types";
import { AuthContext } from "./authContext";
import { authReducer } from "./authReducer";


export const AuthState = ( props ) => {

    const initialState = {
        token: localStorage.getItem( 'token' ),
        autenticado: null,
        usuario: null,
        mensaje: null
    };

    const [ state, dispatch ] = useReducer( authReducer, initialState );
    
    // * Funciones
    const registrarUsario = async ( datos ) => {
        try {
            const respuesta = await clienteAxios.post( '/api/usuarios', datos );
            console.log( respuesta.data );
            
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });

            // * Obtener el usuario
            usuarioAutenticado();
        } catch (error) {
            //console.log( error );
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });
        }
    } 

    // * Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem( 'token' );
        if( token ) {
            // TODO: Función para enviar el token por headers
            tokenAuth( token );
        }
        
        try {
            const respuesta = await clienteAxios.get( '/api/auth' );
            //console.log( respuesta );
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });
        } catch (error) {
            console.log( error.response.data.msg );
            dispatch({
                type: LOGIN_ERROR
            });
        }
    }

    // * Cuando el usuario inicia sesión
    const iniciarSesion = async ( datos ) => {
        try {
            const respuesta = await clienteAxios.post( '/api/auth', datos );
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });

            usuarioAutenticado();
        } catch ( error ) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }

    // * Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        });
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion
            }}
        >
            { props.children }
        </AuthContext.Provider>
    );
} 