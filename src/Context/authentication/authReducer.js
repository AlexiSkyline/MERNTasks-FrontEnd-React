import { LOGIN_ERROR, 
         REGISTRO_ERROR, 
         REGISTRO_EXITOSO,
         OBTENER_USUARIO, 
         LOGIN_EXITOSO,
         CERRAR_SESION} from "../Types";

export const authReducer = ( state, action ) => {
    switch ( action.type ) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem( 'token', action.payload.token );
            return {
                ...state,
                autenticado: true,
                mensaje: null
            }
        case OBTENER_USUARIO: 
            return {
                ...state,
                autenticado: true,
                usuario: action.payload
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload
            }
        default:
            return state;
    };
} ;