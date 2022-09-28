import './pricing.css';
import '../font/Graphik-Regular.ttf';
import zero from '../imgic/Pri1.png';
import ten from '../imgic/Pri2.png';
import nine from '../imgic/Pri3.png';
function Pricing_light() {
  return (
    <div className="Pri" >
      <div className="text1" >
        <h2>Pricing</h2>
        <p className='slogan1'>Most calendars are designed for teams.State is designed for freelancers</p>
      </div>
      <div className='ver2'>
          <div className="icon3"><img src = {zero} alt='' /></div>
          <div className="icon3"><img src = {ten} alt='' /></div>
          <div className="icon3"><img src = {nine} alt='' /></div>
      </div>
    </div>
    
  );
}

export default Pricing_light;
