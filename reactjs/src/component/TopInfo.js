import React from 'react'
import btc from "../assets/img/topinfo/btc.png"
import arrowUp from "../assets/img/topinfo/arrow-up.png"
import chart from "../assets/img/topinfo/chart.png"
import arrowDown from "../assets/img/topinfo/arrow-down.png"
import clock from "../assets/img/topinfo/clock.png"
import search from "../assets/img/topinfo/search.png"

const TopInfo = () => {
	return (
		<>
			<section className="top-info">


			    <div className="top__info__btc">
				    <button id="cryptoButton">
				        <img src={btc} alt="btc" />
				        <p className="btc__text">btc/usdt</p>
				    </button>
				    <div id="cryptoDropdown" className="dropdown__content">
				    	<p className="select__market">select market</p>
				    	<div className="search-container">
					        <input type="text" placeholder="Search" id="cryptoSearch" />
					        <img width="32" height="32" src={search} alt="search icon" className="search-icon" />
					    </div>

				        <div className="filter-buttons">
				            <button id="filterAll" className="active">All</button>
				            <button id="filterUSD">USD</button>
				            <button id="filterBTC">BTC</button>
				        </div>
				        <table className="trading__data btc__table" id="cryptoTable">
						    <tbody>
						        <tr>
						            <td className=""><img src={btc} alt="btc" />BTC - USDT</td>
						            <td>$23,234.6</td>
						            <td>+0.005%</td>
						        </tr>
						        <tr>
						            <td className=""><img src={btc} alt="btc" />ETH - USDT</td>
						            <td>$23,234.6</td>
						            <td>+0.005%</td>
						        </tr>
						        <tr>
						            <td className=""><img src={btc} alt="btc" />BIN - USDT</td>
						            <td>$23,234.6</td>
						            <td>+0.005%</td>
						        </tr>
						    </tbody>
						</table>


				    </div>
				</div>
			    <div className="top__info__price">
			        <p>$20,634</p>
			    </div>
			    <div className="top__info__details">
			        <div className="top__info__detail">
			    		<div className="top__info__text">
			    	    	<img src={clock} alt="clock" />
				            <p className="top__info__title">24h change</p>
				        </div>
			            <p className="stable__price__active">580.80 +1.25%</p>
			        </div>
			        <div className="top__info__detail">
			        	<div className="top__info__text">
			        		<img src={arrowUp} alt="arrow-up" />
			                <p className="top__info__title">24h high</p>
			            </div>
			            <p className="stable__price">580.80 +1.25%</p>
			        </div>
			        <div className="top__info__detail">
			        	<div className="top__info__text">
			    	    	<img src={arrowDown} alt="arrow-down" />
				            <p className="top__info__title">24h low</p>
				        </div>
			            <p className="stable__price">580.80 +1.25%</p>
			        </div>
			        <div className="top__info__detail">
			        	<div className="top__info__text">
				        	<img src={chart} alt="chart" />
			    	        <p className="top__info__title">24h volume</p>
			    	    </div>
			            <p className="stable__price">75.655.26</p>
			        </div>
			    </div>
			</section>

		</>
	)
}

export default TopInfo