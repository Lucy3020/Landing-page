import './partner.css';
import '../font/Graphik-Regular.ttf';
import partner from '../imgic/partner.png';

function Partner_light() {
     return (
      <div className='partner-light'>
         <h2 className='name'>Partners</h2>
         <h4 className='slogan'>Most calendars are designed for teams. Slate is designed for freelancers</h4>
         <img className='partner' src = {partner} alt=''/>
         <button className='button2'>Try for free</button>
      </div>
   );  
}

export default Partner_light;