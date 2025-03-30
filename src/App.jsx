import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ShowInputTimer from './ShowInputTimer'
import StartTimer from './StartTimer'

function App() {
  const [isStart, setIsStart] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [timerId, setTimerId] = useState(0)
  function handleClick(){
    if(hour>0 || minute>0 || second>0)
      setIsStart(true);
    else {
      alert("invalid input")
      return
    }
  }
  function handleStart(e){
    if(e.target.value>=0){    
      if(e.target.name == 'hours') setHour(e.target.value);
      else if(e.target.name == 'minutes') setMinute(e.target.value);
      else if(e.target.name == 'seconds') setSecond(e.target.value);
    }
  }
  function runTimer(sec, min, hr, tid){
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
    if(sec==0 && min ==0 && hr==0){
      alert("Timer Completed")
      clearTimeout(tid)
      resetTimer()
    }
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

  function resetTimer(){
    setHour(0)
    setMinute(0)
    setSecond(0)
    clearInterval(timerId)
    setIsStart(false)
  }

  function handleReset(){
    resetTimer()
  }
  function handlePause(){
    setIsPaused(true);
    clearTimeout(timerId)
  }
  function handleResume(){
    setIsPaused(false);
    runTimer(second,minute,hour,timerId);
  }
  

  return (
    <>
      {!isStart && 
        <ShowInputTimer 
          handleClick={handleClick} 
          handleStart={handleStart}>
        </ShowInputTimer>
      }
      {isStart && 
        <StartTimer
          hour = {hour} minute={minute} second={second}
          handleReset = {handleReset}
          handlePause = {handlePause}
          handleResume = {handleResume}
          isPaused = {isPaused}
        ></StartTimer>
      }
    </>
  )
}

export default App
