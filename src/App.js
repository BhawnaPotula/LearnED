import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Aboutus from './components/Aboutus';
import Team from './components/Team';
function App() {
  return (
    <div className="App">
      <Header />
      <Aboutus/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
