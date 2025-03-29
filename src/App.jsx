import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isStart, setIsStart] = useState(false)
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  function handleClick(){
    setIsStart(true);
  }
  function handleHours(e){
    console.log("--->> ",e.target.name, e.target.value)
    if(e.target.name == 'hours') setHour(e.target.value);
    else if(e.target.name == 'minutes') setMinute(e.target.value);
    else if(e.target.name == 'seconds') setSecond(e.target.value);
  }

  return (
    <>
      {!isStart && <div>
        <div>
          <input className='input_field' type="text" name="hours" onChange = {(e)=>{handleHours(e)}} placeholder='HH'/>
          <input className='input_field' type="text" name="minutes" onChange = {(e)=>{handleHours(e)}} placeholder='MM'/>
          <input className='input_field' type="text" name="seconds" onChange = {(e)=>{handleHours(e)}} placeholder='SS'/>
        </div>
        <div>
          <button type='button' onClick={handleClick}> Start </button>
        </div>
      </div>
      }
      {isStart && <div>
        <div>
          <input value={hour} className='input_field' type="text" placeholder='HH'/>
          <input value={minute} className='input_field' type="text" placeholder='MM'/>
          <input value={second} className='input_field' type="text" placeholder='SS'/>
        </div>
        <div>
          <button type='button' onClick={handleClick}> Pause </button>
          <button type='button' onClick={handleClick}> Restart </button>
        </div>
      </div>
      }
    </>
  )
}

export default App
