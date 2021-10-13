import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const NuevaCuenta = () => {

    // State para registrarse
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
        e.prevetDefault();

        // Todo: Validar que no haya campos

        // Todo: Password minimo sea de 6 Caracteres

        // Todo: Los 2 passwords sean iguales 

        // Todo: Pasarlo al action
    }

    return (
        <div className='form-usuario'>
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