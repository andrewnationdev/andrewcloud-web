import { IUser } from '../types/user';
import React, { useState } from 'react';
import AppLogo from '../components/Header/AppLogo.component';
import { useQuery } from 'react-query';

export default function LoginScreen() {
    const [users, setUsers] = useState<IUser[]>([]);

    const { data, isLoading, isError, refetch } = useQuery('login-query', async () => {
        const request = await fetch("/users/users.json");
        const res = request.text();

        setUsers(JSON.parse(res)!.users as IUser);
    });

    return (<div className="col">
        <AppLogo />
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" />
                        <label for="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        This is an inline input field:
                        <div className="input-field inline">
                            <input id="email_inline" type="email" className="validate" />
                            <label for="email_inline">Email</label>
                            <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                        </div>
                    </div>
                </div>

            </form>
        </div>

    </div>)
}