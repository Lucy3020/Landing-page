import './hero_light.css';
import '../font/Graphik-Regular.ttf';
import Mac from '../imgic/Macbook Pro.png';


function Hero_light()
{
     return (
  <div className='hero_light'>
    <div className='Hero1'><h2>Fastest way to organize</h2></div>
    <div className='connect1'><h4>Most calendars are designed for teams. Slate is designed for freelancers</h4></div>
    <div className ='Mac' ><img src={Mac} alt=''/></div>
    <button className='button1'>Try for free</button>
  </div>
   );  
}

export default Hero_light;