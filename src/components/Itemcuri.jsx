
function Itemcuri({dados}){
    return(
        <>
        {
            dados.map((pegadados) => (
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md max-w-xs">
                <img src={pegadados.img} alt="" className="w-24 h-24 mb-4"/>
                    <h3 className="text-center text-xl font-bold">{pegadados.titulo}</h3>
                    <p className="text-center mt-4">{pegadados.texto}</p>
            </div>
            ))
        }
        </>
    )
}
export default Itemcuri