import '../../styles/main.css';

export default function SidebarComponent() {
    return (
        <div className="sidebar-container">
            <a className="waves-effect waves-light btn light-blue accent-3"
                onClick={() => document.getElementById('avatar')?.click()}
            >
                <i className="material-icons left">archive</i>
                Enviar arquivo
            </a>
            <input type="file" id="avatar" hidden name="avatar" accept="image/png, image/jpeg" />
            {/* Adicionar daqui pra baixo as info de arquivo*/}
            <meter min="0" max="100" value="98.1" high={10} low={90} optimum={50}>98% Used</meter>
            <span>98.1 GB de 100 GB usados</span>
            <a className="waves-effect waves-light btn light-blue accent-4">
                <i className="material-icons left">add_shopping_cart</i>
                Comprar mais armazenamento
            </a>
        </div>
    );
}