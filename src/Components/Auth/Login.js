import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { AlertaContext } from '../../Context/alerta/alertaContext';
import { AuthContext } from '../../Context/authentication/authContext';

export const Login = ( props ) => {

    const alertaContext = useContext( AlertaContext );
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext( AuthContext );
    const { mensaje, autenticado, iniciarSesion } = authContext;

    // * En caso de que el usuario no existan
    useEffect(() => {
        if( autenticado ) {
            // * Cuando el usuario esta registrado lo manda a proyectos
            props.history.push( '/proyectos' );
        } 
        
        if( mensaje ) {
            // * Para mostrar los mensajes
            mostrarAlerta( mensaje.msg, mensaje.categoria );
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

    // State para iniciar Sesión
    const [ usuario, setUsuario ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value   
        });
    }; 

    // todo: Cuando el usuario quiere iniciar Sesión
    const handleSubmit = (e) => {
        e.preventDefault();

        // Todo: Validar que no haya campos
        if( email.trim() === '' || password.trim() === '' ) {
            mostrarAlerta( 'Todos los campos son obligatorios', 'alerta-error' );
            return;
        }

        // Todo: Pasarlo al action
        iniciarSesion({ email, password });
    }

    return (
        <div className='form-usuario'>
             { alerta && <div className={ `alerta ${alerta.categoria}` }> { alerta.msg } </div> }
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={ handleSubmit }
                >
                    <div className='campo-form'>
                        <label htmlFor='email'>Email: </label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            value={ email }
                            onChange={ handleChange }
                        />
                    </div>
                    
                    <div className='campo-form'>
                        <label htmlFor='password'>Password: </label>
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu Password'
                            value={ password }
                            onChange={ handleChange }
                        />
                    </div>

                    <div className='campo-form'>
                        <input 
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Iniciar Sesión'
                        />
                    </div>
                </form>

                <Link 
                    to={ '/nueva-cuenta' }
                    className='enlace-cuenta'
                >
                    Obtener nueva Cuenta
                </Link>
            </div>
        </div>
    )
}