import React, { useContext } from 'react'
import styled from 'styled-components';
import UserContext from '../../context/UserContext';
import './login.css';

const Login = () => {
    const { handleLogin, setUser, error } = useContext(UserContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = () => {
        handleLogin()
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
                                {error.length > 0 ? error.map((err, index) => <i key={index} style={{ color: "rgb(254, 170, 67)", fontSize: 12 }}>{err}</i>) : null}
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
