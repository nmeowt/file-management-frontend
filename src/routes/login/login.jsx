import React, { useState } from 'react'
import styled from 'styled-components';
import Auth from '../../auth';
import './login.css';
const Login = () => {
    var formBody = [];
    const [user, setUser] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        for (const name in user) {
            formBody.push(name + "=" + user[name]);
        }
        formBody = formBody.join("&")

        new Auth().login(formBody)
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
    }

    return (
        <Wrapper>
            <Card>
                <div className="loginboxWrap open">
                    <div className="loginboxWrapAnimate">
                        <div className="loginBox">
                            <h2>Login</h2>
                            <div>
                                <input className="mt-1" placeholder="Username" name="username" onChange={handleChange} />
                                <input className="mt-1" placeholder="Password" type="password" name="password" onChange={handleChange} />
                                <button className="mt-1 btnLogin" onClick={handleSubmit}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Wrapper>
    )
}

export default Login;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Card = styled.div`
  position: fixed;
  top: calc(50vh - 25%);
  text-align: center;
  margin: auto;
  width: 100%;
`;
