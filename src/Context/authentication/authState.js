import React, { useReducer } from 'react';
import { clienteAxios } from "../../Components/config/axios";
import { REGISTRO_ERROR, REGISTRO_EXITOSO } from "../Types";
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
                type: REGISTRO_EXITOSO
            });
        } catch (error) {
            console.log( error );
            
            dispatch({
                type: REGISTRO_ERROR
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