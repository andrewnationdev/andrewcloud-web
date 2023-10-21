import HeaderComponent from '../components/Header/Header.component';
import SidebarComponent from '../components/Sidebar/Sidebar.component';
import FileCardComponent from '../components/FileArea/FileCard.component';

export default function HomePage(){
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
                    <FileCardComponent/>
                    <FileCardComponent/>
                    <FileCardComponent/>
                    <FileCardComponent/>
                    <FileCardComponent/>
                    <FileCardComponent/>
                    <FileCardComponent/>
                    <FileCardComponent/>
                    <FileCardComponent/>
                    <FileCardComponent/>
                    <FileCardComponent/>
                    <FileCardComponent/>
                </div>
            </div>
        </>
    );
}