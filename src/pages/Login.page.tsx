import { IUser } from '../types/user';
import React, { useState, useEffect } from 'react';
import AppLogo from '../components/Header/AppLogo.component';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import notify from '../utils/toast';
import generateUUID from '../utils/uuid';
import useFileStore from '../modules/state'

export default function LoginScreen() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const {data: state, updateData} = useFileStore();

    const navigate = useNavigate();

    const { data, isLoading, isError, refetch } = useQuery('login-query', async () => {
        const request = await fetch("/users/users.json");
        const res = await request.text();

        setUsers(JSON.parse(res as unknown as string)!.users as IUser[]);
    });

    useEffect(()=> {
        if(localStorage.getItem("token")){
            navigate("/files");
        }
    }, [])

    const LogUserIn = (credentials: IUser) => {
        let authenticated: boolean = false;
        let currUser: string = '';

        for (let i = 0; i < users.length; i++) {
            if (users[i].login === credentials.login &&
                users[i].password === credentials.password) {
                authenticated = true;
                currUser = users[i].login;
                localStorage.setItem("token", generateUUID());
                break;
            }
        }

        if (authenticated) {
            navigate("/files");
            updateData({
                ...state,
                user: currUser.toUpperCase().split('@')[0]
            })
        } else {
            notify("Login ou senha incorretos. Tente novamente");
        }
    }

    return (
        <div className="login-page">
            <div className="col login-container">
                <AppLogo />
                <div className="row login-form-area">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"
                                    value={email}
                                    onChange={(e) => setEmail(e?.target?.value)}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate"
                                    value={password}
                                    onChange={(e) => setPassword(e?.target?.value)}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </form>
                    
                    <div className="login-button-container">
                        <a className="waves-effect waves-light btn blue darken-3"
                            onClick={() => LogUserIn({ login: email, password })}
                        >Entrar</a>
                        <a 
                            onClick={() => notify("Não é possível criar novas contas a partir de seu IP")} 
                            className="waves-effect waves-light btn blue darken-3">
                            Cadastrar
                        </a>
                    </div>
                </div>
            </div>
        </div>)
}