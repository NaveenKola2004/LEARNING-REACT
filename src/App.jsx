import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Heading } from './project/Heading'
import { Buttons } from './project/Buttons_Folder/Buttons'
function App() {
  return (
    <div className="info">
      <Heading />
      <Buttons />
     
    </div>
  )
}

export default App

// import React from "react";
// import DataDisplay from "./components/DataDisplay";

// function App() {
//   return (
//     <div>
//       <h1>Frontend Connected to Backend</h1>
//       <DataDisplay />
//     </div>
//   );
// }

// export default App;
