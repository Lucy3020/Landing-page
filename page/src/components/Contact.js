import './contact.css';
import '../font/Graphik-Regular.ttf';
import form from '../imgic/form.png';
import map from '../imgic/map.png';
import gps2 from '../imgic/gps2.png';
import ins2 from '../imgic/ins2.png';
import face2 from '../imgic/face2.png';
import mail from '../imgic/mail.png';
import phone2 from '../imgic/phone2.png';
import twitter2 from '../imgic/twitter2.png';
function Contact() {
  return (
  <div className = 'contact2'>
      <div className="text2" >
        <h2>Contact Us</h2>
        <p className='slogan2'>Most calendars are designed for teams. State is designed for freelancers</p>
      </div>
      <div className='ver2'>
          <div className="icon3">
            <img src = {form} alt='' />
          </div>
          <div className="icon4">
            <img src = {gps2} alt='' />
            <h5 >6386 Spring St undefined Anchorage, Georgia 12473 United States</h5>
          </div>
          <div className="icon4">
            <img src = {phone2} alt='' />
            <h5 >(843) 555-0130</h5>
          </div>
          <div className="icon4">
            <img src = {mail} alt='' />
            <h5 >willie.jennings@example.com</h5>
          </div>
      </div>
          <div className='block4'>
          <div className="icon5"><img src = {map} alt='' /></div>
          <div className="icon6"><img src = {twitter2} alt='' /></div>
          <div className="icon6"><img src = {face2} alt='' /></div>
          <div className="icon6"><img src = {ins2} alt='' /></div>
          </div>
      </div>
   );  
}

export default Contact;
