export default function NoFilesComponent() {
    const imgsrc = "https://cdn4.iconfinder.com/data/icons/treasure-hunter-2/500/box_empty_treasure_ancient_wealth_old_pirate_wooden_spider_web-256.png"
    
    return (
        <div>
            <img
                src={imgsrc}
                alt="Not found error" />
            <span>Nenhum arquivo enviado. Clique em <u>ENVIAR.</u></span>
        </div>
    )
}