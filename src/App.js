
import './App.css';
import Footer from './Components/common/Footer/Footer';
import Header from './Components/common/Header/Header';
import MainComponent from './Components/landingPages/MainComponent';

function App() {
  return (
    <div className="app">
     <Header/>
     <MainComponent/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
