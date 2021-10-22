import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AlertaContext } from '../../Context/alerta/alertaContext';
import { AuthContext } from '../../Context/authentication/authContext';

export const NuevaCuenta = () => {

    // * Extrae los valores del Context
    const alertasContext = useContext( AlertaContext );
    const { alerta, mostrarAlerta } = alertasContext;

    const authContext = useContext( AuthContext );
    const { registrarUsario } = authContext;

    // * State para registrarse
    const [ usuario, setUsuario ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;

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
        if( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '' ) {
            mostrarAlerta( 'Todos los campos son obligatorios', 'alerta-error' );
            return;
        }

        // Todo: Password minimo sea de 6 Caracteres
        if( password.length < 6 ) {
            mostrarAlerta( 'El password debe de tener al menos 6 caracteries', 'error' );
            return;
        }
        // Todo: Los 2 passwords sean iguales 
        if( password !== confirmar ) {
            mostrarAlerta( 'las passwords no coinciden', 'error' );
            return;
        }

        // Todo: Pasarlo al action
        registrarUsario({ nombre, email, password });
    }

    return (
        <div className='form-usuario'>
            { alerta ? ( <div className={ `alerta ${alerta.categoria}` }> { alerta.msg } </div> ) : null }

            <div className='contenedor-form sombra-dark'>
                <h1>Obtener una nueva cuenta</h1>

                <form
                    onSubmit={ handleSubmit }
                >
                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre: </label>
                        <input 
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='Tu Nombre'
                            value={ nombre }
                            onChange={ handleChange }
                        />
                    </div>
                    
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
                        <label htmlFor='confirmar'>Confirmar Password: </label>
                        <input 
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='Repite tu password'
                            value={ confirmar }
                            onChange={ handleChange }
                        />
                    </div>

                    <div className='campo-form'>
                        <input 
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Registarte'
                        />
                    </div>
                </form>

                <Link 
                    to={'/'}
                    className='enlace-cuenta'
                >
                    Ya tengo una Cuenta
                </Link>
            </div>
        </div>
    )
}