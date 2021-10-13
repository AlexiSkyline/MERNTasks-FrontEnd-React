import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {

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
        e.prevetDefault();

        // Todo: Validar que no haya campos

        // Todo: Pasarlo al action
    }

    return (
        <div className='form-usuario'>
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