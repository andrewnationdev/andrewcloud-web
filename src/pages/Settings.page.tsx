import HeaderComponent from '../components/Header/Header.component';
import '../styles/settings.css';
import useFileStore from '../modules/state';
import info from '../utils/info';
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

interface ISettings {
    user: string;
    avatarURL: string;
    email: string;
    password: string;
}

export default function SettingsPage() {
    const { data, updateData } = useFileStore();
    const navigate = useNavigate();

    const [settings, setSettings] = useState<ISettings>({
        user: '',
        avatarURL: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        setSettings({
            user: data.user,
            email: data.user,
            password: '12345678',
            avatarURL: data.avatar
        })
    }, [])

    const handleSaveData = () => {
        updateData({
            ...data,
            user: settings.user,
            avatar: settings.avatarURL,
        });

        info("Configurações salvas com sucesso");
    }

    const handleDeleteAccount = () => {
        updateData({
            user: '',
            avatar: 'https://th.bing.com/th/id/OIP._Ub60e6muH_f6fAyfyZW8AHaEK?pid=ImgDet&rs=1',
            files: [],
            selectedFile: null,
            storageQuota: 0
        })

        localStorage.removeItem("token");

        info("Conta deletada com sucesso");
        navigate("/")
    }

    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate("/")
    }

    return (
        <div className="settings-page">
            <HeaderComponent />
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <h2>Configurações</h2>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"
                                value={settings.email}
                                onChange={(e) => setSettings((s) => ({
                                    ...s,
                                    email: e?.target?.value
                                }))}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="user" type="text" className="validate"
                                value={settings.user}
                                onChange={(e) => setSettings((s) => ({
                                    ...s,
                                    user: e?.target?.value
                                }))}
                            />
                            <label htmlFor="user">Nome de usuário</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"
                                value={settings.password}
                                onChange={(e) => setSettings((s) => ({
                                    ...s,
                                    password: e?.target?.value
                                }))}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="avatar" type="text" className="validate"
                                value={settings.avatarURL}
                                onChange={(e) => setSettings((s) => ({
                                    ...s,
                                    avatarURL: e?.target?.value
                                }))}
                            />
                            <label htmlFor="avatar">URL do Avatar</label>
                        </div>
                    </div>
                </form>

                <a
                    onClick={handleSaveData}
                    className="waves-effect waves-light btn">Salvar</a>
                <a
                    onClick={handleDeleteAccount}
                    className="waves-effect waves-light btn">Excluir conta</a>
                <a
                    onClick={handleLogOut}
                    className="waves-effect waves-light btn">Deslogar</a>
            </div>
        </div>
    )
}