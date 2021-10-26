import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/authentication/authContext';
import { Barra } from '../layout/Barra';
import { Sidebar } from '../layout/Sidebar';
import { FormTarea } from '../tasks/FormTarea';
import { ListadoTareas } from '../tasks/ListadoTareas';

export const Proyectos = () => {

    // * Extrae la información de autenticación
    const authContext = useContext( AuthContext );
    const { usuarioAutenticado } = authContext;

    useEffect( () => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='contenedor-app'>
            <Sidebar />

            <div className='seccion-principal'>
                <Barra />

                <main>
                    <FormTarea />

                    <div className='contenedor-tareas'>
                        <ListadoTareas />
                    </div>

                </main>
            </div>
        </div>  
    );
}
