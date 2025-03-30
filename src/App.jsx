import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isStart, setIsStart] = useState(false)
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [timerId, setTimerId] = useState(0)
  function handleClick(){
    setIsStart(true);
  }
  function handleAll(e){
    console.log("--->> ",e.target.name, e.target.value)
    if(e.target.name == 'hours') setHour(e.target.value);
    else if(e.target.name == 'minutes') setMinute(e.target.value);
    else if(e.target.name == 'seconds') setSecond(e.target.value);
  }
  function runTimer(sec, min, hr, tid){
    console.log("......")
    if(sec>0){
      setSecond((s)=>s-1);
    }
    else if(sec==0 && min>0){
      setMinute((min)=>min-1);
      setSecond(59)
    }
    else if(min==0 && hr>0){
      setHour((hr)=>hr-1);
      setMinute(59)
      setSecond(59)
    }
    console.log("tiddd", tid)
  }

  useEffect(()=>{
    let tid;
    if(isStart){
      tid = setInterval(()=>{
      runTimer(second,minute,hour,tid);
      },1000)
      
      setTimerId(tid)
    }
    return ()=>{
      clearInterval(tid)
    }
    
  },[isStart,hour,minute,second])

  function handleReset(){
    console.log("****", timerId)
    setIsStart(false);
  }

  return (
    <>
      {!isStart && <div>
        <div>
          <input className='input_field' type="number" name="hours" onChange = {(e)=>{handleAll(e)}} placeholder='HH'/>
          <input className='input_field' type="number" name="minutes" onChange = {(e)=>{handleAll(e)}} placeholder='MM'/>
          <input className='input_field' type="number" name="seconds" onChange = {(e)=>{handleAll(e)}} placeholder='SS'/>
        </div>
        <div>
          <button type='button' onClick={handleClick}> Start </button>
        </div>
      </div>
      }
      {isStart && <div className='show-container'>
        <div className='timer-box'>
        <div className='inside-timer-div'>{hour <10 ? `0${hour}` : hour}</div>
        <div>:</div>
        <div className='inside-timer-div'>{minute <10 ? `0${minute}` : minute }</div>
        <div>:</div>
        <div className='inside-timer-div'>{ second <10 ? `0${second}` : second }</div>


          {/* <input value={hour} className='input_field' type="text" placeholder='HH'/>
          <input value={minute} className='input_field' type="text" placeholder='MM'/>
          <input value={second} className='input_field' type="text" placeholder='SS'/> */}
        </div>
        <div>
          <button type='button' className='button-div'  onClick={handleClick}> Pause </button>
          <button type='button' className='button-div' onClick={handleReset}> Restart </button>
        </div>
      </div>
      }
    </>
  )
}

export default App
