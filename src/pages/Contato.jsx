import Formulario from "../components/Formulario"
import Social from "../components/Social"

function Contato (){

    const redes = [
        {
            img: 'https://placehold.co/60x60',
            link: '',
            nome: 'Github'
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