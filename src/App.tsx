import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Portfolio from './components/Portfolio';

import './App.css'
import Modal from './components/Modal';


function App() {

  const projects = [
    {
        id: 1,
        imgSrc: 'mivopat/public/img/mireddit.jpg',
        title: 'Reddit Variation',
        desc: 'Full-stack web application following the basis of Reddit.com. The app allows users to create an account, create, edit, and delete a post, and vote either like or dislike for each post.',
        techDsc: 'React, TypeScript, Express.js, Next.js'
    },
    {
        id: 2,
        imgSrc: '../../../img/pianko.jpg',
        title: 'Title 2',
        desc: 'Full-stack web application following the basis of Reddit.com. The app allows users to create an account, create, edit, and delete a post, and vote either like or dislike for each post.',
        techDsc: 'React, TypeScript, Express.js, Next.js'
    },
    {
        id: 3,
        imgSrc: '../../../img/rockPaperScissors.jpg',
        title: 'Title 3',
        desc: 'Full-stack web application following the basis of Reddit.com. The app allows users to create an account, create, edit, and delete a post, and vote either like or dislike for each post.',
        techDsc: 'React, TypeScript, Express.js, Next.js'
    }
]

  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <About />
      <Portfolio />
      {/* <Modal title='tempData[1]' desc='tempData[2]' techDesc='tempData[3]' />  */}
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
