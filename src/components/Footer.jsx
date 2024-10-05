import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";

function Footer (){
    return(
        <>
        <footer className="bg-blue-400 p-8 text-center flex justify-around">
            <div className="pe-esq">
                <h4 className="text-xl mb-4">Lorem</h4>
                <p>ndjskdas | edindajsakj</p>
            </div>
            <img className="footer-centro" src="https://placehold.co/100x100" alt=""/>
            <div className="flex justify-center space-x-4 mt-4">
                <SlSocialGithub/>
                <SlSocialLinkedin/>
                <MdOutlineMail/>
            </div>
        </footer>
        </>
    )
}
export default Footer