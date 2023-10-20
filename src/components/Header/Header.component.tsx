import AvatarComponent from './Avatar.component';
import AppLogoComponent from './AppLogo.component';
import SearchComponent from './Search.component';

export default function HeaderComponent(){
    return(
        <header>
            <div style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center"
            }}>
            <AppLogoComponent/>
            <SearchComponent/>
            </div>
            <div>
                <a className="btn-floating btn-small waves-effect waves-light blue darken-2">
                    <i className="material-icons">add</i>
                </a>
                <a className="btn-floating btn-small waves-effect waves-light light-blue darken-1">
                    <i className="material-icons">settings</i>
                </a>
            </div>
            <AvatarComponent/>
        </header>
    );
}