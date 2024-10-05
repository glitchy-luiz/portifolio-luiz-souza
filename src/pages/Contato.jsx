import Formulario from "../components/Formulario"
import Social from "../components/Social"

function Contato (){

    const redes = [
        {
            img: 'https://placehold.co/60x60',
            link: 'https://github.com/glitchy-luiz',
            nome: 'Github'
        },
        {
            img: 'https://placehold.co/60x60',
            link: 'https://www.linkedin.com/in/luizfernando-souza/',
            nome: 'Linkedin'
        },
    ]

    return(
        <>
            <Formulario/>
            <Social className='flex' dados={redes}/>
        </>
    )
}
export default Contato