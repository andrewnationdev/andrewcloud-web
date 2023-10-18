import AvatarComponent from './Avatar.component';
import AppLogoComponent from './AppLogo.component';
import SearchComponent from './Search.component';

export default function HeaderComponent(){
    return(
        <header>
            <AppLogoComponent/>
            <SearchComponent/>
            <a className="btn-floating btn-large waves-effect waves-light blue darken-2"><i className="material-icons">add</i></a>
            <a className="btn-floating btn-large waves-effect waves-light light-blue darken-1"><i className="material-icons">settings</i></a>
            <AvatarComponent/>
        </header>
    );
}