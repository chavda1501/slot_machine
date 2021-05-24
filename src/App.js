import React from 'react'
import '../src/Assets/Style/style.css'
import SlotM from './Components/SlotMachine'


const App = () => {


  return(
    <>
    <h1 className="heading_style"> 🎰 Welocme to <span style={{fontWeight: 'bold',background: 'none'} }>Slot Machnie Game</span> 🎰 </h1>
    <div className="slot_machine">
      <SlotM x='😄' y='😠' z='😏'/>
      <SlotM x='😄' y='😄' z='😄'/>
      <SlotM x='😏' y='😏' z='😏'/>
      <SlotM x='🍎' y='🍌' z='🍍'/>
      <SlotM x='🕥' y='🕦' z='🕥'/>
    </div>
    </>
    );
}
export default App;