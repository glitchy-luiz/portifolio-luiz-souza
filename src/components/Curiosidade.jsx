import Itemcuri from "./Itemcuri"

function Curiosidade(){

    const curi = [
        {
            img: 'https://placehold.co/120x150',
            titulo: 'lorem ipsum',
            texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat doloremque quis at, laborum omnis quia qui obcaecati minima excepturi illo suscipit. Eligendi a ipsum temporibus, architecto expedita quaerat qui corporis!'
        },
        {
            img: 'https://placehold.co/120x150',
            titulo: 'lorem ipsum',
            texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat doloremque quis at, laborum omnis quia qui obcaecati minima excepturi illo suscipit. Eligendi a ipsum temporibus, architecto expedita quaerat qui corporis!'
        },
    ]

    return(
        <>
            <section id="curiosidades" className="py-16 bg-gradient-to-r from-blue-400 to-blue-100 mb-20">
            <h2 className="text-4xl text-center mb-12">Curiosidades</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-12">
                <Itemcuri dados={curi}/>
            </div>
        </section>
        </>
    )
}
export default Curiosidade