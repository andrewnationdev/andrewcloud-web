import { IUser } from '../types/user';
import React, { useState } from 'react';
import AppLogo from '../components/Header/AppLogo.component';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    const { data, isLoading, isError, refetch } = useQuery('login-query', async () => {
        const request = await fetch("/users/users.json");
        const res = request.text();

        setUsers(JSON.parse(res as unknown as string)!.users as IUser[]);
    });

    const LogUserIn = (credentials: IUser) => {
        let authenticated: boolean = false;

        for (let i = 0; i < users.length; i++) {
            if (users[i].login == credentials.login)
                if (users[i].password == credentials.password) {
                    authenticated = true;
                    break;
                }
        }

        if (authenticated) {
            navigate("/files");
        } else {
            setError("Login ou senha incorretos. Tente novamente");
        }
    }
}

return (<div className="col">
    <AppLogo />
    <div className="row">
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
        <span>{error}</span>
        <a className="waves-effect waves-light btn-large blue darken-3" onClick={LogUserIn}>Entrar</a>
        <a className="waves-effect waves-light btn-large blue darken-3">Cadastrar</a>
    </div>

</div>)
}