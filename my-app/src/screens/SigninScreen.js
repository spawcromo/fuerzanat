import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { signin } from '../actions/userActions';
import { LoadingBox } from '../components/LoadingBox';
import { MessageBox } from '../components/MessageBox';
import { CheckOutSteps } from '../components/CheckOutSteps';

export const SigninScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1]: '/shipping';

    const dispatch = useDispatch();

    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error} = userSignin;



    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));

    }

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[props.history, redirect, userInfo])




    return (
        <div className="login-screen">

            <h5>Ingresar</h5>

            <CheckOutSteps step1 ></CheckOutSteps>

            <form className="form" onSubmit={submitHandler}>


                <h2>Ingresar</h2>

                <div>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                </div>


              
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



                <button className="button" type="submit">Entrar</button>


                <div>
                    <p>¿No estás registrado? {' '}</p>
                    <Link className="link" to={`/register?redirect=${redirect}`}>Creala ahora mismo</Link>
                </div>



            </form>

        </div>
    )
}
