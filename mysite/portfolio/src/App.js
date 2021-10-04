import TopBar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import './App.scss'

function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
