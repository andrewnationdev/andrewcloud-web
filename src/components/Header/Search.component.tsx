export default function SearchComponent() {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">search</i>
                        <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                        <label for="icon_prefix2">Procurar arquivo</label>
                    </div>
                </div>
            </form>
        </div>
    )
}