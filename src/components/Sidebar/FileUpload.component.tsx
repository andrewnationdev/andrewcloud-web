import React, { useState, useEffect } from 'react';
import useFileStore from '../../modules/state';
import info from '../../utils/info';
import notify from '../../utils/toast';

export default function FileUploadComponent() {
    const [file, setFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [uploadSize, setUploadSize] = useState(0);
    const [timeEstimate, setTimeEstimate] = useState('Calculando tempo estimado...');

    const { data, updateData } = useFileStore();

    const simulateUpload = () => {
        const totalSteps = 20;
        const uploadInterval = 125;

        const fileSize = file!.size!;

        setUploadSize(fileSize);

        let step = 0;
        setUploadProgress(0);

        const timeRequiredInSeconds = (fileSize / (totalSteps * 1024)) * 1.5;
        setTimeEstimate(`${Math.ceil(timeRequiredInSeconds)} segundos`);

        const uploadTimer = setInterval(() => {
            if (step >= totalSteps) {
                clearInterval(uploadTimer);
            } else {
                step++;
                const progress = (step / totalSteps) * 100;
                setUploadProgress(progress);
            }
        }, uploadInterval);

        const reader = new FileReader();
        reader.onload = () => {
            const blobPart = reader.result;
            const files = [...data.files, {
                name: file!.name,
                blob: blobPart,
                size: file!.size,
                lastModifiedDate: file!.lastModified,
                type: file!.type,
            }];

            updateData({
                ...data,
                files: files,
                storageQuota: data.storageQuota + uploadSize
            })
        };
        reader.readAsArrayBuffer(file!);
        info("Upload realizado com sucesso.");
        setFile(null);
    }

    useEffect(() => {
        console.log(file);
        if (file) {
            try {
                simulateUpload();
            } catch(err){
                notify(`Ops, ocorreu um problema: ${err}`);
                setFile(null);
            }
        }
    }, [file])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
        }}>
            <a className="waves-effect waves-light btn light-blue accent-3"
                onClick={() => document.getElementById('file')?.click()}
            >
                <i className="material-icons left">archive</i>
                Enviar arquivo
            </a>
            {file?.name && <span>Enviando {file?.name} - {timeEstimate}</span>}
            {file?.name && <progress value={uploadProgress} max={100} ></progress>}
            <input type="file" onChange={(e) => {
                const file = e.target.files && e.target.files[0];

                if (file) setFile(file)
                else notify("Não foi possível enviar o arquivo. Certifique-se de que ele é válido.")
            }} id="file" hidden name="files" />
        </div>
    )
}