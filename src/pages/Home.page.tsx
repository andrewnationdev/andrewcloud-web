import HeaderComponent from '../components/Header/Header.component';
import SidebarComponent from '../components/Sidebar/Sidebar.component';
import FileCardComponent from '../components/FileArea/FileCard.component';
import useFileStore from '../modules/state';
import {IFile} from '../types/file';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


export default function HomePage(){
    const {data, updateData} = useFileStore();

    const navigate = useNavigate();

    useEffect(()=> {
        if(!localStorage.getItem("token")){
            navigate("/");
        }
    }, [])

    return(
        <>
            <HeaderComponent/>
            <div style={{
                display: "flex",
            }}>
                <SidebarComponent/>
                <div style={{
                    maxHeight: "calc(100vh - 80px)",
                    overflowY: "scroll",
                    width: "80vw",
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px',
                    backgroundColor: 'white',
                    padding: '2rem'
                }}>
                    <div style={{
                        display: "flex",
                        width: "auto"
                    }}>{data?.files?.length > 0 && data?.files?.map((file: IFile) => 
                        <FileCardComponent 
                            name={file.name}
                            blob={file.blob}
                            lastModifiedDate={file.lastModifiedDate}
                            size={file.size}
                            type={file.type}
                        />
                    )}</>
                    {data?.files?.length == 0 && <>Nenhum arquivo enviado. Envie alguns.</>}
                </div>
            </div>
        </>
    );
}