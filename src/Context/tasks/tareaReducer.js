import { TAREAS_PROYECTO } from "../Types";

export const TareaReducer = ( state, action ) => {
    switch( action.type ) {
        case TAREAS_PROYECTO: 
            return {
                ...state,
                tareasProyecto: state.tareas.filter( tarea => tarea.proyectoId === action.payload )
            }
        default:
            return state;
    }
}