import Itemcuri from "./Itemcuri"

function Curiosidade(){

    const curi = [
        {
            img: '',
            titulo: '',
            texto: ''
        },
    ]

    return(
        <>
            <section id="curiosidades">
            <h2 className="titulos">Curiosidades</h2>
            <div className="todo-curiosidades">
                <Itemcuri dados={curi}/>
            </div>
        </section>
        </>
    )
}
export default Curiosidade