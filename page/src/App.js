import './App.css';
import './font/Graphik-Regular.ttf';
import Header from './components/Header_light.js';
import Feature from './components/Feature_light.js';
import Contactdark from './components/Contact_dark.js';
import Hero from './components/Hero_light.js';
import Light from './components/Light_CTA.js';
import Partner from './components/Partner.js';
import Testimonials from './components/Testimonials_light.js';
import Pricing from './components/Pricing.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className='App'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' ></meta>
      <header >
        <Header/>
      </header>
      <body>
        <Feature/>
        <Hero/>
        <Light/>
        <Partner/>
        <Testimonials/>
        <Pricing/>
        <Contact/>
      </body>
      <footer>
      <Contactdark/>
      </footer>
    </div>
  );
}

export default App;
