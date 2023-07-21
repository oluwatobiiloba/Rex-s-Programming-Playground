import './Nav.css'
import {Link} from "react-router-dom";

export function NavBar() {
	return (
			<nav className="navbar  flex-col flex justify-end ">
				<ul className=" px-20 flex flex-row justify-end items-end ">
					<li className="webnavbutton "><Link to={"projects"}>Projects</Link></li>
					<li className="webnavbutton px-20 m-[10px]"><Link to={'contact-me'}>Contact Me</Link></li>
				</ul>
			</nav>
	)
}