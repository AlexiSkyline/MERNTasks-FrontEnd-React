import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AuthContext } from '../../Context/authentication/authContext';

export const RutaPrivada = ({ component: Component, ...props }) => {
    
    const authContext = useContext( AuthContext );
    const { autenticado, cargando, usuarioAutenticado } = authContext;

    useEffect( () => {
        usuarioAutenticado();
        // eslint-disable-next-line 
    }, []);

    return (
        <Route { ...props } 
            render={ props => !autenticado && !cargando ? 
                                                    ( 
                                                        <Redirect to="/" /> 
                                                    ) 
                                                    : 
                                                    ( 
                                                        <Component { ...props } /> 
                                                    ) 
            } 
        />
    );
}
