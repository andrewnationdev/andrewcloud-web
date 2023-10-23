import useFileStore from '../../modules/state';
import FileActionButtonsComponent from './FileActionButtons.component'

export default function FileInfoComponent() {
    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'flex-start',
            textAlign: "left"
        }}>
            <strong><u>Informações do arquivo:</u></strong>
            <span><strong>Nome:</strong> nome.txt</span>
            <span><strong>Tamanho:</strong>11MB</span>
            <span><strong>Tipo:</strong> PNG</span>
            <span><strong>Modificado em:</strong> 25/08/2023 às 19:19</span>
            <span><strong>Acesso:</strong> Privado</span>
            <FileActionButtonsComponent />
        </div>
    </div>
}