import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { register } from '../actions/userActions';
import { LoadingBox } from '../components/LoadingBox';
import { MessageBox } from '../components/MessageBox';

export const RegisterScreen = (props) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1]: '/';

    const dispatch = useDispatch();

    
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error} = userRegister;



    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Las contraseñas ingresadas no son iguales')
        }else{
            dispatch(register(name, email, password));
        }
        

    }

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[props.history, redirect, userInfo])




    return (
        <div className="login-screen">

            <h5>Registrar</h5>

            <form className="form" onSubmit={submitHandler}>


                <h2>Registrar</h2>

                <div>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                </div>


                <label htmlFor="name">Nombre</label>
                    <input

                        type="name"
                        id="name"
                        placeholder="Rick"
                        required
                        onChange={e => setName(e.target.value)}>
                    </input>

              
                    <label htmlFor="email">E-mail</label>
                    <input

                        type="email"
                        id="email"
                        placeholder="ejemplo@ejemplo.com"
                        required
                        onChange={e => setEmail(e.target.value)}>
                    </input>

              
           

                    <label htmlFor="password">Contraseña</label>
                    <input

                        type="password"
                        id="password"
                        placeholder="*******"
                        required
                        onChange={e => setPassword(e.target.value)}>
                    </input>

                    <label htmlFor="confirmPassword">Confirmar contraseña</label>
                    <input

                        type="password"
                        id="confirmPassword"
                        placeholder="*******"
                        required
                        onChange={e => setConfirmPassword(e.target.value)}>
                    </input>



                <button className="button" type="submit">Registrar</button>


                <div>
                    <p>¿Ya estás registrado? {' '}</p>
                    <Link className="link" to={`/signin?redirect=${redirect}`}>Iniciar sesión</Link>
                </div>



            </form>

        </div>
    )
}
