import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Portfolio from './components/Portfolio';

import './App.css'


function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
