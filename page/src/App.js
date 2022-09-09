
import './App.css';
import './font/Graphik-Regular.ttf';
import twitter from './imgic/twitter.png';
import face from './imgic/face.jpg';
import ins from './imgic/ins.png';
import gps from './imgic/gps.png';
import phone from './imgic/phone.png';
function App() {
  return (
    <div className="App" >
      <div className="text" >
        <h1>Pages</h1>
        <p>Home</p>
        <p> Product</p>
        <p> Pricing</p>
        <p>About</p>
        <p> Contact</p>
      </div>
      <div className="text">
        <h1>Tomothy</h1>
        <p>Eleanor&nbsp;Edwards</p> 
        <p>Ted&nbsp;Robertson</p> 
        <p>Annette&nbsp;Russell</p> 
        <p>Jennie&nbsp;Mckinney</p> 
        <p>Gloria&nbsp;Richards</p>
      </div> 
      <div className= "text"> 
        <h1>Jane&nbsp;Black</h1>
        <p>Philip&nbsp;Jones </p> 
        <p> Product</p> 
        <p> Collen&nbsp;Russell</p> 
        <p> Marvin&nbsp;Hawkins</p> 
        <p>  Bruce&nbsp;Simmmons</p>
      </div>
      <div className="contact">
        <span><img src = {gps}  alt=''/></span>
        <span>&nbsp;&nbsp;7480 Mockingbird Hill undefined</span>
        <br></br>
        <span><img src = {phone} alt=''/></span>
        <span>&nbsp;&nbsp;(239) 555-0108</span>
        <br></br>
      </div>
      <div className='ver'>
          <div className="icon"><img src = {twitter} alt='' /></div>
          <div className="icon"><img src = {face} alt='' /></div>
          <div className="icon"><img src = {ins} alt='' /></div>
      </div>
    </div>
    
  );
}

export default App;
