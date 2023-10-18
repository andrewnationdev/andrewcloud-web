import AvatarComponent from './Avatar.component';
import AppLogoComponent from './AppLogo.component';
import SearchComponent from './Search.component';

export default function HeaderComponent(){
    return(
        <>
            <AppLogoComponent/>
            <SearchComponent/>
            
            <AvatarComponent/>
        </>
    );
}