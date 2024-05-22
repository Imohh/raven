// import React from 'react'
// import ngn from "../assets/img/ngn.png"

// const Buy = () => {
// 	return (
// 		<>
// 			<div className="trading__buy col-lg-3 col-md-6 col-sm-12">
// 					<div className="trading__order">
// 						<div className="trading__order__nav">
// 							<div className="order__book">
// 								<p>buy</p>
// 							</div>
// 							<div className="recent__trades">
// 								<p>sell</p>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="trading__action">
// 						<ul>
// 							<li><a className="trading__action__active" href="#">limit</a></li>
// 							<li><a href="#">market</a></li>
// 							<li><a href="#">stop-limit</a></li>
// 						</ul>
// 					</div>

// 					<div>
// 						<form>
// 							<input type="number" id="limitPrice" placeholder="limit price" />
// 							<input type="number" id="amount" placeholder="amount" />
// 							<input type="number" placeholder="type" />
// 							<div className="checkbox__container">
// 						        <input type="checkbox" id="postOnly"/>
// 						        <p>Post only</p>
// 						    </div>

						    
// 						    <div className="buy__total">
// 							    <ul>
// 									<li>total</li>
// 									<li id="totalValue">0.00</li>
// 								</ul>
// 							</div>

// 							<button type="button" id="buyButton">buy <span>btc</span></button>
// 						</form>

// 						<div>

// 							<div className="row data__break__section">
// 							    <div className="col-lg-6 col-md-6 col-sm-6 data__break__head">
// 							        <p>total account value</p>
// 								</div>
// 							   	<div className="col-lg-6 col-md-6 col-sm-6 text-right">
// 							   		<div className="custom-select">
// 								        <select id="currencySelect">
// 								            <option value="ngn" data-image={ngn}><img src={ngn} alt="ngn" />ngn</option>
// 									        <option value="gbp">gbp</option>
// 									        <option value="usd">usd</option>
// 									        <option value="eur">eur</option>
// 								        </select>
// 								    </div>
// 							    </div>
// 								<div className="col-lg-6 col-md-6 col-sm-6">
// 							        <p>0.00</p>
// 							    </div>
// 						    </div>

// 					        <div className="row data__break__section">
// 					        	<div className="col-lg-6 col-md-6 col-sm-6 col-12 data__break__head">
// 							        <p>open orders</p>
// 							    </div>
// 					        	<div className="col-lg-6 col-md-6 col-sm-6 col-12 text-right data__break__head">
// 						            <p>available</p>
// 						        </div>
// 							    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
// 						            <p>0.00</p>
// 						        </div>
// 					        	<div className="col-lg-6 col-md-6 col-sm-6 col-12 text-right">
// 						            <p>0.00</p>
// 						        </div>
						    	
// 						    	<button>deposit</button>
// 						    </div>

// 						</div>
// 					</div>
// 				</div>
// 		</>
// 	)
// }

// export default Buy


import React, { useState } from 'react';
import ngn from "../assets/img/ngn.png"

const TradingAction = () => {
  const [selectedForm, setSelectedForm] = useState('limit');

  const handleFormSelection = (formType) => {
    setSelectedForm(formType);
  };

  return (
  	<div className="trading__buy col-lg-3 col-md-6 col-sm-12">
  		<div className="trading__order">
 			<div className="trading__order__nav">
 				<div className="order__book">
 					<p>buy</p>
 				</div>
 				<div className="recent__trades">
 					<p>sell</p>
 				</div>
 			</div>
 		</div>
	    <div className="trading__container">
	      <div className="trading__action">
	        <ul>
	          <li>
	            <a
	              className={selectedForm === 'limit' ? 'trading__action__active' : ''}
	              href="#"
	              onClick={() => handleFormSelection('limit')}
	            >
	              Limit
	            </a>
	          </li>
	          <li>
	            <a
	              className={selectedForm === 'market' ? 'trading__action__active' : ''}
	              href="#"
	              onClick={() => handleFormSelection('market')}
	            >
	              Market
	            </a>
	          </li>
	          <li>
	            <a
	              className={selectedForm === 'stop-limit' ? 'trading__action__active' : ''}
	              href="#"
	              onClick={() => handleFormSelection('stop-limit')}
	            >
	              Stop-Limit
	            </a>
	          </li>
	        </ul>
	      </div>

	      <div>
	        {selectedForm === 'limit' && (
	          <form>
	            <input type="number" id="limitPrice" placeholder="limit price" />
	            <input type="number" id="amount" placeholder="amount" />
	            <input type="number" placeholder="type" />
	            <div className="checkbox__container">
	              <input type="checkbox" id="postOnly" />
	              <p>Post only</p>
	            </div>
	            <div className="buy__total">
	              <ul>
	                <li>total</li>
	                <li id="totalValue">0.00</li>
	              </ul>
	            </div>
	            <button type="button" id="buyButton">buy <span>btc</span></button>
	          </form>
	        )}
	        {selectedForm === 'market' && (
	          <form>
	            <input type="number" id="amountMarket" placeholder="amount" />
	            <div className="buy__total">
	              <ul>
	                <li>total</li>
	                <li id="totalValueMarket">0.00</li>
	              </ul>
	            </div>
	            <button type="button" id="buyButtonMarket">buy <span>btc</span></button>
	          </form>
	        )}
	        {selectedForm === 'stop-limit' && (
	          <form>
	            <input type="number" id="triggerPrice" placeholder="Lrigger price" />
	            <input type="number" id="limitPriceStop" placeholder="limit price" />
	            <input type="number" id="amountStop" placeholder="amount" />
	            <div className="checkbox__container">
	              <input type="checkbox" id="postOnlyStop" />
	              <p>Post only</p>
	            </div>
	            <div className="buy__total">
	              <ul>
	                <li>total</li>
	                <li id="totalValueStop">0.00</li>
	              </ul>
	            </div>
	            <button type="button" id="buyButtonStop">buy <span>btc</span></button>
	          </form>
	        )}

	        	<div>

 					<div className="row data__break__section">
 					    <div className="col-lg-6 col-md-6 col-sm-6 data__break__head">
 					        <p>total account value</p>
 						</div>
 					   	<div className="col-lg-6 col-md-6 col-sm-6 text-right">
 					   		<div className="custom-select">
 						        <select id="currencySelect">
 							        <option value="ngn" data-image={ngn}><img src={ngn} alt="ngn" />ngn</option>
 							        <option value="gbp">gbp</option>
 							        <option value="usd">usd</option>
 							        <option value="eur">eur</option>
 						        </select>
 						    </div>
 					    </div>
 						<div className="col-lg-6 col-md-6 col-sm-6">
 					        <p>0.00</p>
 					    </div>
 					</div>

 				    <div className="row data__break__section">
 				       	<div className="col-lg-6 col-md-6 col-sm-6 col-12 data__break__head">
 					        <p>open orders</p>
 					    </div>
 			        	<div className="col-lg-6 col-md-6 col-sm-6 col-12 text-right data__break__head">
 					        <p>available</p>
 				    	</div>
 					    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
 				            <p>0.00</p>
 				        </div>
 			        	<div className="col-lg-6 col-md-6 col-sm-6 col-12 text-right">
 				            <p>0.00</p>
 				        </div>
					    
					    <div>
	 				    	<button>deposit</button>
 				    	</div>
 				    </div>

 				</div>
	      </div>
	    </div>
	</div>
  );
};

export default TradingAction;
