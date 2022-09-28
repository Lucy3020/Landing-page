import './testimonials_light.css';
import '../font/Graphik-Regular.ttf';
import avatar from '../imgic/avatar.png';
import ibm from '../imgic/IBM.png';

function Testimonials_light()
{
     return (
  < div className='testi'>
    <div className='tes'><h2>Testimonials</h2></div>
    <img className='ibm' src={ibm} alt=''/>
    <div className='p'><h4>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</h4></div>
    <div class="flex items-center">
    <img src={avatar}/>
    <div>
      <h5>Organize across</h5>
      <h5>Ui designer</h5>
    </div>
    </div>
    <button className='button'>More Testimonials</button>
  </div>
   );  
}

export default Testimonials_light;