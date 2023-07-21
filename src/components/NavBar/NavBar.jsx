import './Nav.css'
import {Link} from "react-router-dom";

export function NavBar() {
	return (
		<div className="pagenav">
			<nav className="navbar">
				<ul className="webnav">
					<li className="webnavbutton"><Link to={"projects"}>Projects</Link></li>
					<li className="webnavbutton"><a href="">Login</a></li>
					<li className="webnavbutton"><a href="">Register</a></li>
					<li className="webnavbutton"><Link to={'contact-me'}>Contact Me</Link></li>
				</ul>
			</nav>
		</div>
	)
}