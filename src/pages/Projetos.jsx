import Cardprojeto from "../components/Cardprojeto"
import info from "../Projeto.json"

function Projetos (){

    return(
        <>
            <section id="projetos" className="mb-20">
                <h2 className="text-4xl text-center mb-12">Projetos</h2>
                <Cardprojeto  projeto={info}/>
            </section>
        </>
    )
}
export default Projetos