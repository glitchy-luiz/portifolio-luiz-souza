
function Itemcuri({dados}){
    return(
        <>
        {
            dados.map((pegadados) => (
            <div className="curi2">
                <img src={pegadados.img} alt=""/>
                <div className="curi-dir">
                    <h3 className="tit-curi">{pegadados.titulo}</h3>
                    <p>{pegadados.texto}</p>
                </div>
            </div>
            ))
        }
        </>
    )
}
export default Itemcuri