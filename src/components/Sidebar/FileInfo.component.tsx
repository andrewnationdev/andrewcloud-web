import useFileStore from '../../modules/state';
import FileActionButtonsComponent from './FileActionButtons.component'

export default function FileInfoComponent(){
    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        <div></div>
        <FileActionButtonsComponent/>
    </div>
}