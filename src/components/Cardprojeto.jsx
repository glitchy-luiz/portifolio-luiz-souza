
function Cardprojeto ({projeto}){
    return(
        <>
        {
            projeto.map((pegaprojeto) => (
                <div className="space-y-16 my-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between bg-blue-400 p-8 rounded-xl">
                        <img className="w-64 h-64 rounded-lg mb-8 lg:mb-0 lg:mr-8" src={pegaprojeto.img} alt=""/>
                        <div className="cont-p">
                            <p className="text-2xl font-bold mb-4">{pegaprojeto.titulo}</p>
                            <p className="mb-4">{pegaprojeto.texto}</p>
                            <ul className="flex space-x-4">
                                <li className="px-4 py-2 border-2 border-gray-900">{pegaprojeto.tag1}</li>
                                <li className="px-4 py-2 border-2 border-gray-900">{pegaprojeto.tag2}</li>
                                <li className="px-4 py-2 border-2 border-gray-900">{pegaprojeto.tag3}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))
        }
        </>
    )
}
export default Cardprojeto