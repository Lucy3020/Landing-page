import './header_light.css';
import '../font/Graphik-Regular.ttf';
import fig from '../imgic/fig_icon.png';
import twitter from '../imgic/twitter.png';
import face from '../imgic/face.jpg';
import ins from '../imgic/ins.png';

function Header_light()
{
     return (
  <div className='header-l'>
    <ul className ='nav'>
      <li >Home</li>
      <li >Product</li>
      <li >Pricing</li>
      <li >Contact</li>
      <img className ='fig' src={fig} alt=''/>
      <div className='ver'>
        <div className="icon"><img src = {twitter} alt='' /></div>
        <div className="icon"><img src = {face} alt='' /></div>
        <div className="icon"><img src = {ins} alt='' /></div>
      </div>
    </ul>
    <div className ='Hero'><h1>The best products start with Figma</h1></div>
    <div className='connect'>
        <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>
        </div>
    <button className="button2">Try for free</button>
  </div>
   );  
}

export default Header_light;