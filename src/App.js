import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainContent from './components/Content/MainContent';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={MainContent} />
          <Route path='/landing-page' component={LandingPage} />
        </Switch>
      </BrowserRouter>
      {/* <MainContent/> */}
      <Footer/>
    </div>
  );
}

export default App;
