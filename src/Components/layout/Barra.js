import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/authentication/authContext'

export const Barra = () => {

    const authContext = useContext( AuthContext );
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect( () => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return (
        <header className='app-header'>
            { usuario && <p className="nombre-usuario">Hola <span>{ usuario.nombre }</span> </p> }
            
            <div className="nav-principal">
                <button
                    className='btn btn-blanl cerrar-sesion'
                    onClick={ () => cerrarSesion() }
                >
                    Cerrar Sesión
                </button>
            </div>
            
        </header>
    )
}
