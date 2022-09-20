import './feature_light.css';
import '../font/Graphik-Regular.ttf';
import screen from '../imgic/screen content.png';
import font from '../imgic/font.png';
import action from '../imgic/action.png';
import design from '../imgic/design.png';
function Feature_light()
{
     return (
  <div className='feature_light'>
      <div className='default'><h2>Features</h2></div>
      <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>
      <div className="icon2">
        <img src = {font} alt='' />
        <h3>OpenType features Variable fonts</h3>
        <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
      </div>
      <div className="icon2">
        <img src = {design} alt='' />
        <h3>Design with real data</h3>
        <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
      </div>
      <div className="icon2">
        <img src = {action} alt='' />
        <h3>Fastest way to take action</h3>
        <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
      </div>
      <img className='screen'src = {screen} alt=''/>
  </div>
   );  
}

export default Feature_light;