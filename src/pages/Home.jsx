import Curiosidade from "../components/Curiosidade"
import Sobre from "../components/Sobre"

function Home (){
    return(
        <div className="bg-black text-zinc-50">
            <Sobre/>
            <Curiosidade/>
        </div>
    )
}
export default Home