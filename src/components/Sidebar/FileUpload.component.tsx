import React, { useState, useEffect } from 'react';
import useFileStore from '../../modules/state';

export default function FileUploadComponent() {
    const [file, setFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [uploadSize, setUploadSize] = useState(0);
    const [timeEstimate, setTimeEstimate] = useState('Calculando tempo estimado...');

    const {data, updateData} = useFileStore();

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

        const files = [...data.files, {
            name: file!.name,
            blob: file!.blob,
            size: file!.size,
            lastModifiedDate: file!.lastModifiedDate,
            type: file!.type
        }];

        updateData({
            ...data,
            files: files,
            storageQuota: data.storageQuota + uploadSize
        })
    }


    useEffect(() => {
        console.log(file);
        if(file) {
            simulateUpload();
        }
    }, [file])

    return (
        <>
            <a className="waves-effect waves-light btn light-blue accent-3"
                onClick={() => document.getElementById('avatar')?.click()}
            >
                <i className="material-icons left">archive</i>
                Enviar arquivo
            </a>
            {file && <span>Enviando {file?.name} - {timeEstimate}</span>}
            {file && <progress value={uploadProgress} max={100} ></progress>}
            <input type="file" onChange={(e) => {
                const file = e.target.files && e.target.files[0];

                if (file) setFile(file)
                /** adicionar mensagem de erro */
            }} id="avatar" hidden name="avatar" accept="image/png, image/jpeg" />
        </>
    )
}