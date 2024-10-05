import { useParams } from "react-router-dom"
import info from "../Projeto.json"
export default function Detalheprojeto (){

    const { slug } = useParams()

    const proj = info.find((proj) => proj.slug == slug)

    return(
        <>
        {
            proj ? 
                <div>
                    <div className="space-y-16 my-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between bg-blue-400 p-8 rounded-xl">
                            <img className="w-64 h-64 rounded-lg mb-8 lg:mb-0 lg:mr-8" src={proj.img} alt=""/>
                            <div className="cont-p">
                                <p className="text-2xl font-bold mb-4">{proj.titulo}</p>
                                <p className="mb-4">{proj.texto}</p>
                                <p className="mb-4">{proj.texto2}</p>
                                <ul className="flex space-x-4">
                                    <li className="px-4 py-2 border-2 border-gray-900">{proj.tag1}</li>
                                    <li className="px-4 py-2 border-2 border-gray-900">{proj.tag2}</li>
                                    <li className="px-4 py-2 border-2 border-gray-900">{proj.tag3}</li>
                                </ul>
                                <a href={proj.link}>Confira aqui!</a>
                            </div>
                        </div>
                    </div>
                </div>
            : <p>Projeto não encontrado</p>
        }
        </>
    )
}