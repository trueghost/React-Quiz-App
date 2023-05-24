import { useRef } from "react";

export default function Start({setUserName}) {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };

  return (
    <div className="start">
     <h1 className="titleName">Ultimate Gamer Quiz</h1>
     <input 
     placeholder="Enter Your Gamer Tag" 
     className="startInput"
     ref={inputRef}
     />

     <button className="startButton"
     onClick={handleClick}
     >Start</button>
    </div>
  )
}
