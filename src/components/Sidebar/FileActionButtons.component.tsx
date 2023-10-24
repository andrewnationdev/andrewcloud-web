export default function FileActionButtonsComponent(){
    return <div style={{
        display: "flex",
    }}>
        <a 
            className="btn-floating waves-effect waves-blue darken-1">
            <i className="material-icons">share</i>
        </a>
        <a 
            className="btn-floating waves-effect waves-blue darken-2">
            <i className="material-icons">remove_red_eye</i>
        </a>
        <a 
            className="btn-floating waves-effect waves-blue darken-3">
            <i className="material-icons">file_download</i>
        </a>
        <a 
            className="btn-floating waves-effect blue darken-4">
            <i className="material-icons">remove</i>
        </a>
    </div>
}