import '../../styles/header.css';

export default function SearchComponent() {
    return (
        <div>
            <form >
                <div>
                    <div className="input-field col">
                        <i className="material-icons prefix">search</i>
                        <textarea
                            placeholder="Pesquise arquivos e pastas..."
                            className="materialize-textarea search-field">    
                        </textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}