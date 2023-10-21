export default function FileCardComponent() {
    return (
        <div className="row">
            <div className="col">
                <div className="card" style={{
                    width: "200px"
                }}>
                    <div className="card-image">
                        <img src="images/sample-1.jpg" />
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">more_horiz</i></a>
                    </div>
                    <div className="card-content">
                        <p contentEditable>meuarquivo.txt</p>
                    </div>
                </div>
            </div>
        </div>
    )
}