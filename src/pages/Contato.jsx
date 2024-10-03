import Formulario from "../components/Formulario"
import Social from "../components/Social"

function Contato (){

    const redes = [
        {
            img: '',
            link: '',
            nome: ''
        },
    ]

    return(
        <>
            <Formulario/>
            <Social dados={redes}/>
        </>
    )
}
export default Contato