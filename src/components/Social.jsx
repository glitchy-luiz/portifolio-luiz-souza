
function Social ({dados}){
    return(
        <>
        {
            dados.map((pegasocial) => (
            <a href={pegasocial.link}>
                <div className="text-center space-y-4 py-5">
                        <img className="w-24 h-24 mx-auto" src={pegasocial.img}/>
                        <p>{pegasocial.nome}</p>
                    </div>
            </a>
            ))
        }
        </>
    )
}
export default Social