import "./BUTTON_CSS_FILES/Project.css"
export function Project(){
    const project1=()=>{
        const proje=document.createElement('a');
        proje.href="/NAVEEN.pdf";
        proje.download="project1.pdf";
        proje.click();
    };
    const project2=()=>{
        const proje=document.createElement('a');
        proje.href="/NAVEEN.pdf";
        proje.download="project2.pdf";
        proje.click();
    };

    return(
        <div >
            <h1 className="eduhed">Welcome To You</h1>
            <h1 className="headding">PROJECTS</h1>
            <div>
                <h1 className="projecthead2">1. Student Management System </h1>
                <p><b>Project Summary:</b>
This project is a backend-only RESTful API built using Express.js that performs full CRUD operations for managing student records. It does not include any frontend interface. The system is connected to a MySQL database, where all student data is stored and manipulated through the API endpoints.</p>
<h1>Tech Stack:</h1>

<li>Backend: Node.js, Express.js</li>

<li>Database: MySQL</li>

<li>Tools: Postman for API testing</li>
<p>To know the more things download the project 1 PDF </p>
                <button onClick={project1} className="resumeButn">Download</button>
                <br></br>
<h1 className="projecthead2"> 2. Stock Management System</h1>
<p><b>Project Summary:</b>
This project is a backend-only RESTful API built using Express.js that performs full CRUD operations for managing student records. It does not include any frontend interface. The system is connected to a MySQL database, where all student data is stored and manipulated through the API endpoints.</p>
<h1>Tech Stack:</h1>
<li>Backend: Node.js, Express.js</li>

<li>Database: MySQL</li>

<li>Tools: Postman for API testing</li>
                <button onClick={project2} className="resumeButn">Download</button>
            </div>
        </div>
    )
}