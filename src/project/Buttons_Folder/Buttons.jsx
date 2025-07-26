// import { Home } from "../Buttons_content/Home";

// export function Buttons(){
//     return(
//         <div className="Buttons">
//     <button onClick={Home()}>HOME</button>
//     <button >EDUCATION INFO</button>
//     <button >PROFESSIONAL INFO</button>
//     <button >PROJECTS</button>
//     <button >PERSONAL INFO</button>
//     </div>
//     )
// }   

import { useState } from 'react';
import { Home } from "../Buttons_content/Home";
import { Education_info } from '../Buttons_content/Education_info';
import { Professional_info } from '../Buttons_content/Professional_info';
import { Project } from '../Buttons_content/Project';
import { Personal_info } from '../Buttons_content/Personal_info';
export function Buttons() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <div className="Buttons">
        <button onClick={() => setActivePage("home")}>HOME</button>
        <button onClick={() => setActivePage("edu")}>EDUCATION INFO</button>
        <button onClick={() => setActivePage("pro")}>PROFESSIONAL INFO</button>
        <button onClick={() => setActivePage("proj")}>PROJECTS</button>
        <button onClick={() => setActivePage("personal")}>PERSONAL INFO</button>
      </div>

      <div className="content">
        {activePage === "home" && <Home />}
        {activePage === "edu" && <Education_info />}
        {activePage === "pro" && <Professional_info/>}
        {activePage === "proj" && <Project /> }
        {activePage === "personal" && <Personal_info/>}
      </div>
    </>
  );
}
