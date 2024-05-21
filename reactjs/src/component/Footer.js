import React from 'react'
import facebook from "../assets/img/footer/facebook.png"
import twitter from "../assets/img/footer/twitter.png"
import instagram from "../assets/img/footer/instagram.png"

const Footer = () => {
	return (
		<footer className="footer">
        <div className="footer__content">
            <div className="footer__social">
                <a href="#"><img src={facebook} alt="Facebook" /></a>
                <a href="#"><img src={twitter} alt="Twitter" /></a>
                <a href="#"><img src={instagram} alt="Instagram" /></a>
            </div>
            <p>&copy; Sisyphus. All rights reserved.</p>
            <a href="#" class="footer__contact">Contact Us</a>
        </div>
    </footer>
	)
}

export default Footer