import AvatarComponent from './Avatar.component';
import AppLogoComponent from './AppLogo.component';
import SearchComponent from './Search.component';

export default function HeaderComponent(){
    return(
        <>
            <AppLogoComponent/>
            <SearchComponent/>

            <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
            <AvatarComponent/>
        </>
    );
}