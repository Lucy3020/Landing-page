import './header_light.css';
import '../font/Graphik-Regular.ttf';
import fig from '../imgic/fig_icon.png';
import twitter from '../imgic/twitter.png';
import face from '../imgic/face.jpg';
import ins from '../imgic/ins.png';

function Header_light()
{
     return (
  <div className='bg-hero-pattern text-white'>
    <navbar>
      <p>Home</p>
      <p>Product</p>
      <p >Pricing</p>
      <p >Contact</p>
      <img src={fig} alt=''/>
      <div className='ver'>
        <img src = {twitter} alt='' />
        <img src = {face}alt=''/>
        <img src = {ins} alt='' />
      </div>
    </navbar>
    <div className ='Hero'><h1>The best products start with Figma</h1></div>
    <div className='connect'>
        <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>
        </div>
    <button className="bg-[#2091F9] text-white">Try for free</button>
  </div>
   );  
}

export default Header_light;