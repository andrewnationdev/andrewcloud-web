import '../../styles/main.css';
import FileUpload from './FileUpload.component';
import StorageComponent from './Storage.component';
import FileInfoComponent from './FileInfo.component';

export default function SidebarComponent() {
    return (
        <div className="sidebar-container">
            <FileUpload/>
            <FileInfoComponent/>
            <StorageComponent/>
            <a className="waves-effect waves-light btn light-blue accent-4">
                <i className="material-icons left">add_shopping_cart</i>
                Comprar mais
            </a>
        </div>
    );
}