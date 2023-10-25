export default function NoFilesComponent() {
    const imgsrc = "https://cdn4.iconfinder.com/data/icons/treasure-hunter-2/500/box_empty_treasure_ancient_wealth_old_pirate_wooden_spider_web-256.png"

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            gap: "1rem"
        }}>
            <img
                src={imgsrc}
                alt="Not found error" />
            <span style={{
                
            }}>Nenhum arquivo enviado. Clique em <u>ENVIAR.</u></span>
        </div>
    )
}