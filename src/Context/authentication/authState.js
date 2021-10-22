import { useReducer } from "react/cjs/react.production.min";
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

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje
            }}
        >
            { props.children }
        </AuthContext.Provider>
    );
} 