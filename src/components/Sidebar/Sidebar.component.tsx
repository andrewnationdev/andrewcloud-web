import '../../styles/main.css';
import FileUpload from './FileUpload.component';

export default function SidebarComponent() {
    return (
        <div className="sidebar-container">
            <FileUpload/>
            <hr/>
           
            <a className="waves-effect waves-light btn light-blue accent-4">
                <i className="material-icons left">add_shopping_cart</i>
                Comprar mais armazenamento
            </a>
        </div>
    );
}