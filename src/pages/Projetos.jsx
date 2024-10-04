import Cardprojeto from "../components/Cardprojeto"

function Projetos (){

    const info = [
        {
            img:'https://placehold.co/250x250',
            titulo:'Titulo proj',
            texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magnam placeat. Doloremque debitis velit voluptates. Voluptatum distinctio saepe earum modi nobis atque asperiores perferendis! Ut similique molestias rem error. Fugit.',
            tag1:'tag',
            tag2:'tag',
            tag3:'tag'
        },
    ]

    return(
        <>
            <section id="projetos" className="mb-20">
                <h2 className="text-4xl text-center mb-12">Projetos</h2>
                <Cardprojeto projeto={info}/>
            </section>
        </>
    )
}
export default Projetos