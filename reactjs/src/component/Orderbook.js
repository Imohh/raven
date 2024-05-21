import React from 'react'
import order1 from "../assets/img/topinfo/order1.png"
import order2 from "../assets/img/topinfo/order2.png"
import order3 from "../assets/img/topinfo/order3.png"
import greenArrow from "../assets/img/topinfo/green-arrow.png"

const Orderbook = () => {
	return (
		<>
			<div className="trading__order__book col-lg-3 col-md-6 col-sm-12 col-lg-offset-2">
					<div className="trading__order">
						<div className="trading__order__nav">
							<div className="order__book">
								<p>order book</p>
							</div>
							<div className="recent__trades">
								<p>recent trades</p>
							</div>
						</div>
					</div>
					<div className="trading__filter">
						<ul className="image__list">
							<li className="image__list__active"><img src={order1} alt="" /></li>
							<li><img src={order2} alt="" /></li>
							<li><img src={order3} alt="" /></li>
						</ul>

						<div className="number__selection">
					        <select>
					            <option value="1">10</option>
					            <option value="2">20</option>
					            <option value="3">30</option>
					        </select>
					    </div>
					</div>
					<table className="trading__data">
					    <thead>
					        <tr>
					            <th>price <br /><span>(usdt)</span></th>
					            <th>amounts <br /><span>(btc)</span></th>
					            <th>total</th>
					        </tr>
					    </thead>
					    <tbody>
					        <tr>
					            <td className="sell__price">36920.12</td>
					            <td>0.758965</td>
					            <td>28,020.98</td>
					        </tr>
					        <tr>
					            <td className="sell__price">36920.12</td>
					            <td>0.758965</td>
					            <td>28,020.98</td>
					        </tr>
					        <tr>
					            <td className="sell__price">36920.12</td>
					            <td>0.758965</td>
					            <td>28,020.98</td>
					        </tr>
					        <tr>
					            <td className="sell__price">36920.12</td>
					            <td>0.758965</td>
					            <td>28,020.98</td>
					        </tr>
					        <tr className="last__highlight">
					            <td className="sell__price">36920.12</td>
					            <td>0.758965</td>
					            <td>28,020.98</td>
					        </tr>
					    </tbody>
					</table>

					<div>
						<table className="trading__data data__break">
						    <thead>
						    	<tr>
						            <td className="buy__price">36,920.20</td>
						            <td><img src={greenArrow} alt="" /></td>
						            <td className="buy__price">36,641.20</td>
						        </tr>
						    </thead>
						</table>
					</div>

					<table className="trading__data">
					    <thead>
					        <tr>
					            <th>price <br /><span>(usdt)</span></th>
					            <th>amounts <br /><span>(btc)</span></th>
					            <th>total</th>
					        </tr>
					    </thead>
					    <tbody>
					        <tr>
					            <td className="buy__price">36920.12</td>
					            <td>0.758965</td>
					            <td>28,020.98</td>
					        </tr>
					        <tr>
					            <td className="buy__price">36920.12</td>
					            <td>0.758965</td>
					            <td>28,020.98</td>
					        </tr>
					        <tr>
					            <td className="buy__price">36920.12</td>
					            <td>0.758965</td>
					            <td>28,020.98</td>
					        </tr>
					        <tr>
					            <td className="buy__price">36920.12</td>
					            <td>0.758965</td>
					            <td>28,020.98</td>
					        </tr>
					        <tr>
					            <td className="buy__price">36920.12</td>
					            <td>0.758965</td>
					            <td>28,020.98</td>
					        </tr>
					    </tbody>
					</table>

				</div>	
		</>
	)
}

export default Orderbook