
function Social ({dados}){
    return(
        <>
        {
            dados.map((pegasocial) => (
            <a href={pegasocial.link}>
                <img src={pegasocial.img} alt={pegasocial.nome} />
                <p>{pegasocial.nome}</p>
            </a>
            ))
        }
        </>
    )
}
export default Social