import React, { useState } from 'react'
import '../styles/style.css';
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import TopInfo from '../component/TopInfo'
import Chart from '../component/Chart'
import Orderbook from '../component/Orderbook'
import TradingAction from '../component/TradingAction'
import Openorder from '../component/Openorder'

function Exchange() {

  const [selectedForm, setSelectedForm] = useState('chart');

  const handleFormSelection = (formType) => {
    setSelectedForm(formType);
  };

  return (
    <div>
      <Navbar />
      <TopInfo />
      <section className="mobile-view">
        <div className="trading__order">
          <div className="trading__order__nav">
            <div  className={`recent__trades ${selectedForm === 'chart' ? 'trading__action__active' : ''}`}
              /*className={selectedForm === 'limit' ? 'trading__action__active' : ''}*/
              onClick={() => handleFormSelection('chart')}
            >
              <p>Charts</p>
            </div>
            <div className={`recent__trades ${selectedForm === 'orderbook' ? 'trading__action__active' : ''}`}
            onClick={() => handleFormSelection('orderbook')}>
              <p>Orderbook</p>
            </div>
            <div className={`recent__trades ${selectedForm === 'recenttrades' ? 'trading__action__active' : ''}`}
            onClick={() => handleFormSelection('recenttrades')}>
              <p>Recent trades</p>
            </div>
          </div>
        </div>
      </section>

      {selectedForm === 'chart' && (
        <section class="trading-view mobile-view">
          <div class="container-no-padding">
            <div class="row mb-5">
              <Chart />
              <Openorder />
            </div>
          </div>
        </section>
      )}
      {selectedForm === 'orderbook' && (
        <section class="trading-view">
          <div class="container-no-padding">
            <div class="row mb-5">
              <Orderbook />
              <Openorder />
            </div>
          </div>
        </section>
      )}
      {selectedForm === 'recenttrades' && (
        <section class="trading-view">
          <div class="container-no-padding">
            <div class="row mb-5">
              <TradingAction />
              <Openorder />
            </div>
          </div>
        </section>
      )}

      <section class="trading-view web-view">
        <div class="container-no-padding">
          <div class="row mb-5">
            <Chart />
            <Orderbook />

            <TradingAction />
            <Openorder />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Exchange;
