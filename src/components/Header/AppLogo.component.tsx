import '../../styles/header.css';

export default function AppLogoComponent(){
    return(
        <div>
            <img className="app-logo" src="/assets/logo.png" alt="AndrewCloudlogo" />
            <span className="app-logo-text">AndrewCloud</span>
        </div>
    );
}