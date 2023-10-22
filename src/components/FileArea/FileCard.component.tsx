import {IFile} from '../../types/file';
import {getFileIcon, TFileIcon} from '../../utils/icons';

export default function FileCardComponent(props: IFile) {
    const icon: TFileIcon = getFileIcon(props?.type);

    return (
        <div className="row">
            <div className="col">
                <div className="card" style={{
                    width: "200px"
                }}>
                    <div className="card-image">
                        <i style={{
                            color: icon?.color,
                            fontSize: '3rem'
                        }}>{icon?.icon}</i>
                        <a className="btn-floating halfway-fab waves-effect waves-light blue darken-4"><i className="material-icons">more_horiz</i></a>
                    </div>
                    <div className="card-content">
                        <p contentEditable>{props?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}