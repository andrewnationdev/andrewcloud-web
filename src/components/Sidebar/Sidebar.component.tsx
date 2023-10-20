import '../../styles/main.css';

export default function SidebarComponent(){
    return(
        <div className="sidebar-container">
            <meter min="0" max="100" value="75">75% Used</meter>
            <span>3.11 GB de 100 GB usados</span>
        </div>
    );
}