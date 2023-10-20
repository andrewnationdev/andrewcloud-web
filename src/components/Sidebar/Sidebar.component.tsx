import '../../styles/main.css';

export default function SidebarComponent(){
    return(
        <div className="sidebar-container">
            <meter min="0" max="100" value="98.1" high={10} low={90} optimum={90}>98% Used</meter>
            <span>98.1 GB de 100 GB usados</span>
            <meter min="0" max="100" value="3.11" high={10} low={90} optimum={90}>3% Used</meter>
            <span>3.11 GB de 100 GB usados</span>
        </div>
    );
}