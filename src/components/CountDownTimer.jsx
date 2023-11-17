import React, { Component } from 'react';
import emandh_logo from '../assets/emadh_logo.png';
class CountDownTimer extends Component {
state = {
     days: 0,
     hours: '00',
     minutes: '00',
     seconds: '00',
     timeUp: false
}
componentDidMount() {
   setInterval(() => {
       
      let eventDate = + new Date(this.props.date);
      let difference = eventDate - + new Date();
if (difference < 1) {
         this.setState({ timeUp: true });
      } else {
         let days = Math.floor(difference / (1000 * 60 * 60 * 24));
         let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
         let minutes = Math.floor((difference / (1000 * 60)) % 60);
         let seconds = Math.floor((difference / (1000)) % 60);
         this.setState({
            hours: hours > 9 ? hours : `0${hours}`,
            minutes: minutes > 9 ? minutes : `0${minutes}`,
            seconds: seconds > 9 ? seconds : `0${seconds}`,
            days
         });
      }
   }, 1000)
}
render() {
     const {days, hours, minutes, seconds, timeUp} = this.state;
return (
        
            timeUp ?
          <p>Site is running </p> 
          :
          <section className=''>  
          
          <div className="bg-[#191A24] min-h-screen">
          <div className='font-bold text-2xl lg:text-3xl text-center text-white pt-10'>Hey There! Welcome To Bayelsa SUBEB</div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
            <span className="text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest px-2 mt-[100px]">
              Site Will be live in :
            </span>
            <div className="flex justify-center gap-3 sm:gap-8">
              <div className="flex flex-col gap-5 relative">
                <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                  <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                    {`${days}` }
                  </span>
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                </div>
                <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                  {`${days}` === 1 ? "Day" : "Days"}
                </span>
              </div>
              <div className="flex flex-col gap-5 relative">
                <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                  <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                    {`${hours}`}
                  </span>
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                </div>
                <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
                  {`${hours}` === 1 ? "Hour" : "Hours"}
                </span>
              </div>
              <div className="flex flex-col gap-5 relative">
                <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                  <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                    {`${minutes}`}
                  </span>
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                </div>
                <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                  {`${minutes}` === 1 ? "Minute" : "Minutes"}
                </span>
              </div>
              <div className="flex flex-col gap-5 relative">
                <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                  <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                    {`${seconds}`}
                  </span>
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                </div>
                <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                  {`${seconds}` === 1 ? "Second" : "Seconds"}
                </span>
              </div>
            </div>
            <div className='flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:items-center'> 
            <div className='text-white  pt-[100px] lg:pt-[200px]'> </div> 
            <div className='text-white text-sm lg:text-2xl'>Under Construction by : </div>
            <div><img src={emandh_logo} alt='emandh_logo' className='w-[150px] lg:w-[200px] mx-auto rounded-lg hover:scale-105 duration-500'/></div>
            </div>
          </div>
          
        </div>
        </section>
        
     );
   }
}
export default CountDownTimer;