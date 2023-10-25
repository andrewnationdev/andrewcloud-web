import HeaderComponent from '../components/Header/Header.component';
import '../styles/settings.css'

export default function SettingsPage(){
    //Nome, senha, e-mail, avatar...

    return(
        <div className="settings-page">
            <HeaderComponent/>
            <h2>Configurações</h2>

        </div>
    )
}