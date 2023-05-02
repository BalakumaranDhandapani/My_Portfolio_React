import React from 'react'
import '../AboutContent/AboutContent.css'

function AboutCard({ skills }) {
    return (
        <div className="skill-list">
            <div className="skill-text">
                <img src={skills.pic}
                    className={skills.subs} alt="" />
                <p>{skills.skillname}</p>
            </div>
        </div>
    )
}

export default AboutCard