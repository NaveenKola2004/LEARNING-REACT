import "./BUTTON_CSS_FILES/professional.css"
export function Professional_info(){
    const downloadResume =()=>{
        const link=document.createElement('a');
        link.href='/src/project/PDFS/resume/NAVEEN.pdf';
        link.download='Tony_Resume.pdf';
        link.click();
    }
    return(
        <div>
            <h1 className="eduhed">Welcome to the professional info</h1>
            <div className="profhead1">
                <h1 >Professional Info </h1>
                <p>Hi, I’m Tony, a passionate and dedicated Computer Science student with a strong commitment to continuous learning and real-world application of technical skills. Currently pursuing my degree, I’m a full-time learner who thrives on solving complex problems and building impactful software solutions.

I specialize in full-stack web development, with a growing proficiency in technologies like React + Vite, Node.js, Express.js, MySQL, and MongoDB. I also have hands-on experience working with Flask for Python-based web development. From building RESTful APIs to integrating animated frontends, I enjoy bringing both backend logic and frontend experiences to life.</p>
            </div>
            <div className="profhead2">
                <h1 className="profhead2">Technical Skills</h1>
                <li><b>Languages:</b> Python, JavaScript, Java </li>
                <li><b>Backend:</b> PNode.js, Express.js</li>
                <li><b>Databases: </b>MySQL, MongoDB</li>
                <li><b>Tools & Platforms: </b>Git, Postman, VS Code, Google Forms,</li>
            </div>
            <div className="profhead3">
                <h1>Projects Highlights</h1>
                <l1><b>🔧 Student Management System:</b>Full CRUD operations using Node.js + MySQL</l1>
                <li><b>📦 Stock Management System : </b>Backend-driven inventory system with RESTful API endpoints.</li>
            </div>
            <div className="profhead4">
                <h1>Career Goals</h1>
                <li><b>📈 Short Term:</b>Placed in any mnc company</li>
                <li><b>🚀 Long Term:</b>Esports player</li>
            </div>
            <div className="profhead5">
                <h1>Hobbies & Interests</h1>
                <p>I love exploring new technologies, learning through building side projects, and staying up-to-date with tech trends. I also enjoy reading about software architecture, UI/UX trends, and watching coding tutorials just for fun.</p>
            </div>
            <div className="resumeContainer">
               <button onClick={downloadResume} className="resumeButn">Resume</button>
            </div>
        </div>
    )
}