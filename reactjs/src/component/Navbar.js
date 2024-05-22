import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import globe from "../assets/img/globe.png"
import signout from "../assets/img/signout.png"
import arrowRight from "../assets/img/arrow-right.png"
import logo from "../assets/img/logo.png"
import user from "../assets/img/user.png"
import menu from "../assets/img/menu.png"

const Navbar = () => {
	const [show, setShow] = useState(false)

	const toggleMobileMenu = () => {
	    setShow(!show);
	};

	return (
		<>
		<nav className="web-nav">
			<div className="nav__left">
				<div className="nav__logo">
					<img src={logo} alt="logo" />
				</div>
				<ul className="nav__list">
					<li>
						<Link to="/" className="nav__list__active">
                  			Exchange
		                </Link>
		            </li>
					<li>
						<Link to="/wallets">
							wallets
						</Link>
					</li>
					<li>
						<Link to="/roqqu-hub">
							roqqu hub
						</Link>
					</li>
				</ul>
			</div>

			<div className="nav__right">
				<div className="nav__user">
					<img src={user} alt="" />
					<p className="nav__user__name">olakunle te...</p>
					<img className="nav__user__arrow" src={arrowRight} alt="" />
				</div>
				<div className="nav__item">
					<img src={globe} alt="" />
					<img src={signout} alt="" />
				</div>
			</div>
		</nav>

	{/*mobile nav*/}

	<nav className="mobile-nav">
	    <div className="nav__left">
	        <div className="nav__logo">
	            <img src={logo} alt="logo" />
	        </div>
	    </div>

	    <div className="nav__right">
	        <div className="nav__user">
	            <img src={user} alt="user" />
	        </div>
	        <div className="nav__item">
	            <img src={globe} alt="globe" />
	        </div>
	        <div className="hamburger" onClick={toggleMobileMenu}>
	            <img src={menu} alt="menu" />
	        </div>
	    </div>


	    {show && 
			<div className="mobile-dropdown">
				<ul>
			        <li>
						<Link to="/" className="nav__list__active">
		           			Exchange
		                </Link>
		            </li>
					<li>
						<Link to="/wallets">
							wallets
						</Link>
					</li>
					<li>
						<Link to="/roqqu-hub">
							roqqu hub
						</Link>
					</li>
			    </ul>
		    </div>
		}
	    
	</nav>

	</>
	)
}

export default Navbar