import Calculator from "./component/Calculator";
import { Globastyle } from "./Globalstyle";
import { useState,useEffect } from "react";
function App() {
  const [ColorTheme,setColorTheme] = useState('theme1')
  // local storage
  useEffect(()=>{
     const CurrentThemeColor = localStorage.getItem('theme-color')
     if(CurrentThemeColor){
      setColorTheme(CurrentThemeColor)
     }
  },[])
 const HandlerClick = (theme)=>{
   setColorTheme(theme)
   localStorage.setItem('theme-color',theme)
 }

  return (
    <div className={`App ${ColorTheme}`}>
       <Globastyle/>
       <Calculator ColorTheme={ColorTheme} setColorTheme={setColorTheme} HandlerClick={HandlerClick}/>
    </div>
  );
}

export default App;
