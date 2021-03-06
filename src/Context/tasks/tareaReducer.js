import { AGREGAR_TAREA, 
         TAREAS_PROYECTO, 
         VALIDAR_TAREA,
         ELIMINAR_TAREA,
        //  ESTADO_TAREA,
         TAREA_ACTUAL,
         TAREAS_ERROR,
         ACTUALIZAR_TAREA,
         LIMPIAR_TAREA } from "../Types";

export const TareaReducer = ( state, action ) => {
    switch( action.type ) {
        case TAREAS_PROYECTO: 
            return {
                ...state,
                tareasProyecto: action.payload
            }
        case AGREGAR_TAREA: 
            return {
                ...state,
                tareasProyecto: [  action.payload, ...state.tareasProyecto ],
                errorTarea: false
            }
        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareasProyecto: state.tareasProyecto.filter( tarea => tarea._id !== action.payload )
            }
        case ACTUALIZAR_TAREA:
        // case ESTADO_TAREA:
            return{
                ...state,
                tareasProyecto: state.tareasProyecto.map( tarea => tarea._id === action.payload._id ? action.payload : tarea ),
            }
        case TAREA_ACTUAL: 
            return {
                ...state,
                tareaSeleccionada: action.payload
            }
        case LIMPIAR_TAREA:
            return {
                ...state,
                tareaSeleccionada: null
            }
        case TAREAS_ERROR: 
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}