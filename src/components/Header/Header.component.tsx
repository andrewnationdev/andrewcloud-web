import AvatarComponent from './Avatar.component';
import AppLogoComponent from './AppLogo.component';
import SearchComponent from './Search.component';
import notify from '../../utils/toast';
import useFileStore from '../../modules/state';
import { useNavigate } from 'react-router-dom';

export default function HeaderComponent() {
    const {data, updateData} = useFileStore();

    const navigate = useNavigate();

    const handleNewFolder = () => {
      let folderName: string = prompt("insira o nome da pasta")!;

      if (folderName != "") {
        const folder = {
            name: folderName,
            blob: null,
            type: "folder",
            size: 0,
            lastModifiedDate: new Date().getTime(),
            isFolder: true,
        }

        updateData({
            ...data,
            files: [...data.files, folder]
        })
      } else {
        notify("O nome da pasta informada está vazio")
      }
        
    }

    return (
        <header>
            <div style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center"
            }}>
                <AppLogoComponent />
                <SearchComponent />
            </div>
            <div style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center"
            }}>
                <div style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center"
                }}>
                    <a
                        onClick={handleNewFolder}
                        title="Criar nova pasta"
                        className="btn-floating btn-small waves-effect waves-light blue darken-2">
                        <i className="material-icons">add</i>
                    </a>
                    <a 
                        title="Configurações do Usuário"
                        onClick={() => navigate("/settings")}
                        className="btn-floating btn-small waves-effect waves-light light-blue darken-1"
                    >
                        <i className="material-icons">settings</i>
                    </a>
                </div>
                <AvatarComponent />
            </div>
        </header>
    );
}