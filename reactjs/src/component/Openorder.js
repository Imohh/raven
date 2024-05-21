import React from 'react'

const Openorder = () => {
	return (
		<>
			<div className="open__orders__section col-lg-6">
				<div className="trading__order">
					<div className="trading__order__navs">
						<div className="order__book">
							<p>open orders</p>
						</div>
						<div className="recent__trades">
							<p>positions</p>
						</div>
						<div className="recent__trades">
							<p>order-history</p>
						</div>
						<div className="recent__trades">
							<p>trade history</p>
						</div>
					</div>
				</div>
				<div className="open__orders__text">
					<p className="no__open__orders">no open orders</p>
					<p className="open__orders__lorem">Lorem ipsum sit amet, consectetur adipiscing elit, Id pulvinar sit imperdit pulvinar.</p>
				</div>
			</div>
		</>
	)
}

export default Openorder