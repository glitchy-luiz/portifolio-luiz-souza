import { NavLink } from "react-router-dom"

function Menu (){
    return(
        <>
            <div className="bg-blue-400 h-24 flex items-center mb-16 ">
                <div className="flex pl-96">
                    <h2 className="text-3xl pl-80">Luiz Souza</h2>
                    <div className="ml-44">
                        <NavLink className="text-2xl mx-10" to='/'>Home</NavLink>
                        <NavLink className="text-2xl mx-10" to='/projetos'>Projetos</NavLink>
                        <NavLink className="text-2xl mx-10" to='/contato'>Contato</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu