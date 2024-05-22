import React from "react"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Wallets = () => {
	return (
		<>
			<Navbar />
			<section className="wallets">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<p>wallets</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Wallets