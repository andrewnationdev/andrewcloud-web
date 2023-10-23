import {IFile} from '../../types/file';
import {getFileIcon, TFileIcon} from '../../utils/icons';
import useFileStore from '../../modules/state';

export default function FileCardComponent(props: IFile) {
    const icon: TFileIcon = getFileIcon(props?.type);
    const { data, updateData } = useFileStore();

    const selectThisFile = () => {
        updateData({
            ...data,
            selectedFile: props
        })
    }

    return (
        <div className="row">
            <div className="col">
                <div className="card" style={{
                    width: "200px"
                }}>
                    <div className="card-image">
                        <i 
                        className="material-icons"
                        style={{
                            color: icon?.color,
                            fontSize: '10rem'
                        }}>{icon?.icon}</i>
                        <a
                            onClick={selectThisFile} 
                            className="btn-floating halfway-fab waves-effect waves-light blue darken-4">
                                <i className="material-icons">more_horiz</i>
                        </a>
                    </div>
                    <div className="card-content">
                        <p contentEditable>{props?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}