import logo from './logo.svg';
import './styles/style.css';
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Chart from './component/Chart'
import Orderbook from './component/Orderbook'
import TradingAction from './component/TradingAction'
import Openorder from './component/Openorder'

function App() {
  return (
    <div>
      <Navbar />
      <section class="trading-view">
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

export default App;
