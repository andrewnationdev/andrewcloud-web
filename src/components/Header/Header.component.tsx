import AvatarComponent from './Avatar.component';
import AppLogoComponent from './AppLogo.component';
import SearchComponent from './Search.component';

export default function HeaderComponent() {
    const handleNewFolder = () => {
      let folderName: string = prompt ("insira o nome da pasta");

      if (folderName != "") {
        
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
                    <a className="btn-floating btn-small waves-effect waves-light light-blue darken-1">
                        <i className="material-icons">settings</i>
                    </a>
                </div>
                <AvatarComponent />
            </div>
        </header>
    );
}