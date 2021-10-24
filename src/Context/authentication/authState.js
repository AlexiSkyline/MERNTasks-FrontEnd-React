import React, { useReducer } from 'react';
import { clienteAxios } from "../../Components/config/axios";
import { tokenAuth } from '../../Components/config/tokenAuth';
import { LOGIN_ERROR, OBTENER_USUARIO, REGISTRO_ERROR, REGISTRO_EXITOSO } from "../Types";
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
            console.log( respuesta );

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
        const token = localStorage.getItem( 'toke' );
        if( token ) {
            // TODO: Función para enviar el token por headers
            tokenAuth( token );
        }

        try {
            const respuesta = await clienteAxios.get( '/api/auth' );
            console.log( respuesta );
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            });
        }
    }
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsario
            }}
        >
            { props.children }
        </AuthContext.Provider>
    );
} 