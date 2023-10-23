import useFileStore from '../../modules/state';
import FileActionButtonsComponent from './FileActionButtons.component'
import {bytesToMegabytes} from '../../utils/convert';

export default function FileInfoComponent() {
    const { data, updateData } = useFileStore();

    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        {data?.selectedFile && <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'flex-start',
            textAlign: "left"
        }}>
            <strong><u>Informações do arquivo:</u></strong>
            <span><strong>Nome:</strong>{data?.selectedFile?.name}</span>
            <span><strong>Tamanho:</strong>{bytesToMegabytes(data?.selectedFile?.size)}</span>
            <span><strong>Tipo:</strong>{data?.selectedFile?.type}</span>
            <span><strong>Modificado em:</strong>{data?.selectedFile?.lastModifiedDate}</span>
            <span><strong>Acesso:</strong>privado</span>
            <FileActionButtonsComponent />
        </div>}
    </div>
}