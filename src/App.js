
import './App.css';
import {useState,useEffect} from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import Header from './components/Header';
import Time from './components/Time';
import Timetable from './Timetable';
import Timetable2 from './Timetable2';
import Timetable3 from './Timetable3';
import 'animate.css';

function App() {

  const [loading,setLoading] = useState(false)

  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{

    setLoading(false)


  },4000)
  },[])
  return (
    <>
    <div className='aaa'>
      
    {
      
      loading ?
      <BeatLoader color={'#36d7b7'} loading={loading}  size={50} id="ccc"  />
      
      :
     
      <div className='bbb'>
        <div className=' box delay01 animate__animated animate__fadeIn'>
      <Header/>
      
    <p>こんにちはyaya</p>
    <Timetable/>
    <Timetable2/>
    <Timetable3/>
    
    </div>
    <div class="avatar">
  <div class="w-24 rounded">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div>
    
  </div>

    
    }
    </div>
    

</>
  );
}

export default App;
