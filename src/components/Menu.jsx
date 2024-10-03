import { NavLink } from "react-router-dom"

function Menu (){
    return(
        <>
            <div className="bg-sky-800">
                <h2 className="nome">Luiz Souza</h2>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contato'>Contato</NavLink>
            </div>
        </>
    )
}
export default Menu