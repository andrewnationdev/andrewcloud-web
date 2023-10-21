export default function FileCardComponent() {
    return (
        <div className="row">
            <div className="col">
                <div className="card" style={{
                    width: "200px"
                }}>
                    <div className="card-image">
                        <img src="https://th.bing.com/th/id/OIP.VSn6cLf_0p4Y4W9dZktozAHaJz?pid=ImgDet&rs=1" />
                        <a className="btn-floating halfway-fab waves-effect waves-light blue darken-4"><i className="material-icons">more_horiz</i></a>
                    </div>
                    <div className="card-content">
                        <p contentEditable>meuarquivo.txt</p>
                    </div>
                </div>
            </div>
        </div>
    )
}