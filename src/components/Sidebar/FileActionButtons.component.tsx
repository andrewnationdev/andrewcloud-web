import notify from '../../utils/toast'
import info from '../../utils/info'
import useFileStore from '../../modules/state'

export default function FileActionButtonsComponent(){
    const {data, updateData} = useFileStore();

    const handleRemoveFile = () => {
        try {
            const filesExceptDeleted = [];
            const currentFile = data.selectedFile;

            for(let file = 0; file < data.files.length; file++){
                if(data.files[file].name != currentFile!.name){
                    filesExceptDeleted.push(data.files[file]);
                }
            }

            info("Arquivo deletado com sucesso!")

        } catch(err) {
            notify(`Não foi possível deletar o arquivo. ERRO: ${err}`)
        }
    }

    const handlePreviewFile = () => {
        try {
            const url = URL.createObjectURL(data.selectedFile!.blob!);
            window.open(url);
        } catch(err) {
            notify("Não é possível pré-visualizar ou baixar o arquivo.")
        }
    }

    return <div style={{
        display: "flex",
        gap: "8px"
    }}>
        <a
            onClick={()=>{
                notify("Não é possível compartilhar publicamente o arquivo. Assine o plano PRO.")
            }}
            className="btn-floating waves-effect waves-blue darken-1">
            <i className="material-icons">share</i>
        </a>
        <a
            onClick={handlePreviewFile}
            className="btn-floating waves-effect waves-blue darken-2">
            <i className="material-icons">remove_red_eye</i>
        </a>
        <a 
            className="btn-floating waves-effect waves-blue darken-3">
            <i className="material-icons">file_download</i>
        </a>
        <a
            onClick={handleRemoveFile}
            className="btn-floating waves-effect blue darken-4">
            <i className="material-icons">remove</i>
        </a>
    </div>
}