import './light_CTA.css';
import '../font/Graphik-Regular.ttf';
import screen2 from '../imgic/screen_content2.png';
function Light_CTA()
{
     return (
  <div className='light_CTA'>
   <img className='screen2'src = {screen2} alt=''/>
      <div className='block'>
        <h3>At your fingertips</h3>
        <h2>Lightning fast prototyping</h2>
        <div className='block2'>
          <h3>Subscribe to our Newsletter</h3>
          <p>Available exclusivery on Figmaland</p>
        </div>
        <span>
          <input className="input" type="text" value={"          Your email"}></input>
          <button className='button3'>Subscribe</button>
        </span>
        
      </div>
  </div>
   );  
}

export default Light_CTA;