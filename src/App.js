import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const [tabs, setTabs] =useState([
    {
      label:"Concept",
      content:"Concept",
      isSelected: false
    },
    {
      label:"Ideas",
      content:"Ideas",
      isSelected: false
    },
    {
      label:"Gallery",
      content:"Gallery",
      isSelected: false
    },
  ])
  
  return (
    <div className="App">
      <div>
        {tabs.map((tab, i) => {
          return(
            <Tabs index={i} label={tab.label} tabs={tabs} setTabs={setTabs}/>
          )
        })}
      </div>
      <div className ="tabStyle">
        {tabs.map((tab) => {
          return(
            tab.isSelected && <div>{ tab.content }</div>
        )})}
      </div>
    </div>
  );
}

export default App;
