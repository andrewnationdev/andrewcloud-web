import '../../styles/header.css';
import { useNavigate } from 'react-router-dom';

export default function AppLogoComponent(){
    const navigate = useNavigate();
    
    return(
        <div className="app-logo-container" onClick={()=> navigate("/files")}>
            <img className="app-logo" src="/assets/logo.png" alt="AndrewCloudlogo" />
            <span className="app-logo-text">AndrewCloud</span>
        </div>
    );
}