import './App.css';
import './font/Graphik-Regular.ttf';
import Header_light from './components/Header_light.js';
import Feature_light from './components/Feature_light.js';
import Contact_dark from './components/Contact_dark.js';
import Hero_light from './components/Hero_light.js';
import Light_CTA from './components/Light_CTA.js';
import Partner_light from './components/Partner.js';
import Testimonials_light from './components/Testimonials_light.js';
import Pricing_light from './components/Pricing.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className='App'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' ></meta>
      <header >
        <Header_light/>
      </header>
      <body>
        <Feature_light/>
        <Hero_light/>
        <Light_CTA/>
        <Partner_light/>
        <Testimonials_light/>
        <Pricing_light/>
        <Contact/>
      </body>
      <footer>
      <Contact_dark/>
      </footer>
    </div>
  );
}

export default App;
