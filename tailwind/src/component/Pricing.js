import './pricing.css';
import '../font/Graphik-Regular.ttf';
import zero from '../imgic/Pri1.png';
import ten from '../imgic/Pri2.png';
import nine from '../imgic/Pri3.png';
function Pricing_light() {
  return (
    <div class="bg-blue items-center content-center justify-center w-1777px h-1155px md:max-w lg:max-w xl:max-w 2xl:max-w " >
        <h2 class="text-white" >Pricing</h2>
        <p class="text-white w-532px h-80px">Most calendars are designed for teams. State is designed for freelancers</p>
          <div className="flex flex-row items-center content-center justify-center">
          <img class="flex-none w-335px h-307px py-40px order-0  "src = {zero} alt='' />
          <img class="flex-none w-335px h-693px  py-83px order-1 " src = {ten} alt='' />
          <img class="flex-none w-335px h-307px py-40px order-2 " src = {nine} alt='' />
          </div>
    </div>
    
  );
}

export default Pricing_light;