import HeaderComponent from '../components/Header/Header.component';
import SidebarComponent from '../components/Sidebar/Sidebar.component';
import FileCardComponent from '../components/FileArea/FileCard.component';
import useFileStore from '../modules/state';
import {IFile} from '../types/file';

export default function HomePage(){
    const {data, updateData} = useFileStore();

    return(
        <>
            <HeaderComponent/>
            <div style={{
                display: "flex",
            }}>
                <SidebarComponent/>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    maxHeight: "calc(100vh - 80px)",
                    overflowY: "scroll"
                }}>
                    {data?.files?.length > 0 && data?.files?.map((file: IFile) => 
                        <FileCardComponent 
                            name={file.name}
                            blob={file.blob}
                            lastModifiedDate={file.lastModifiedDate}
                            size={file.size}
                            type={file.type}
                        />
                    )}
                    {data?.files?.length == 0 && <>Nenhum arquivo enviado. Envie alguns.</>}
                </div>
            </div>
        </>
    );
}