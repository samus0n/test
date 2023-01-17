
import './App.css';
import {useState,useEffect} from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import Header from './components/Header';
import Timetable from './Timetable';
import Timetable2 from './Timetable2';
import Timetable3 from './Timetable3';
import 'animate.css';
import Home from './Home';
//import MediaQuery from "react-responsive";


import{BrowserRouter as Router,Route,Routes } from "react-router-dom";

function App() {

  const [loading,setLoading] = useState(false)


  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{

    setLoading(false)


  },4000)
  },[])
  return (
    <Router>
    <>
    <div className='aaa'>
      
    {
      
      loading ?
      <BeatLoader color={'#36d7b7'} loading={loading}  size={50} id="ccc"  />
      
      
      :
     
      <div className='bbb'>
        <div className=' box delay01 animate__animated animate__fadeIn'>
          <div id='Header'>
      <Header/>
      </div>
      

  
    <Routes>

    <Route path="/" element={ <Home/>}/>
    <Route path='/time1' element={<Timetable/>}/>
    <Route path='/time2' element={<Timetable2/>}/>
    <Route path='/time3' element={<Timetable3/>}/>
    
    
    

    </Routes>

   
  

    
    </div>
   
    
  </div>

    
    }
    </div>

    
    

</>
</Router>
)};



export default App;
