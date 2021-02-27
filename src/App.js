import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';
import Header from './components/utilities/header';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/icofont/icofont.min.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/animate.css/animate.min.css';
import './assets/vendor/venobox/venobox.css';
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/css/style.css';
import Footer from './components/utilities/footer';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes />
      <Footer />
    </Provider>
  );
}

export default App;
