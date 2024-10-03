import { NavLink } from "react-router-dom"

function Menu (){
    return(
        <>
            <div className="bg-blue-700 flex justify-center text-cyan-200 py-8 text-3xl font-semibold ">
                <div className="flex pl-96">
                    <h2 className="nome mr-40">Luiz Souza</h2>
                    <div>
                        <NavLink className="mx-10" to='/'>Home</NavLink>
                        <NavLink className="mx-10" to='/contato'>Contato</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu