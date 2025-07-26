import "./BUTTON_CSS_FILES/EDUCATION.css"
export function Education_info(){
    return (
        <div>
            <h1 className="eduhed">Welcome the Education PAGE</h1>
            <div className="edueng">
                <h1>Engineering</h1>
                <p>Curently i Studying B.E Computer Science and engineering in Muthayammal engineering college</p>
                <img src="/src/project/PHOTOS/Education_photos/college.jpg" alt="College photo"></img>
            </div>
            <div className="eduinter">
                <h1>Intermediate</h1>
                <p>I completed my Intermediate in NRI junior college </p>
                <img src="/src/project/PHOTOS/Education_photos/college2.jpg" alt="inter college photo"></img>
            </div>
            <div className="eduschool">
                <h1>Schooling</h1>
                <p>I completed my SSC in Z.P.H.School in Basavannapalem</p>
                <img src="/src/project/PHOTOS/Education_photos/" alt="school image"></img>
            </div>
        </div>
        
    )
}