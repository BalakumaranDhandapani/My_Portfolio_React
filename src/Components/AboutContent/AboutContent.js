import { Link } from 'react-router-dom'
import '../AboutContent/AboutContent.css'

import React from 'react'
import AboutCard from './AboutCard'
import { Container } from 'react-bootstrap'

function AboutContent() {
    const skillsets = [
        {
            pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png",
            skillname: "HTML",
            subs: "html5-image"
        },
        {
            pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
            skillname: "CSS",
            subs: "css-image"
        },
        {
            pic: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            skillname: "JavaScript",
            subs: "js-image"
        },
        {
            pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
            skillname: "Bootstrap",
            subs: "bootstrap-image"
        },
        {
            pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            skillname: "React js",
            subs: "reactjs-image"
        },
        {
            pic: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
            skillname: "Node js",
            subs: "nodejs-image"
        },
        {
            pic: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
            skillname: "MongoDB",
            subs: "mongodb-image"
        },
        {
            pic: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
            skillname: "MYSQL",
            subs: "mysql-image"
        },
    ]
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I took the Web developer as an interest in creating new Web sites learning about new technologies.</p>
                <p>I try to build and showcase new creative and innovative ideas on Web sites and Web design for a great user experience with my technical and professional skills.</p>
                <Link to={"/contact"}>
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className='right'>
                <section id="about">
                    <div className="skills">
                        <h3 className="skill-heading"> My <span style={{ color: "#ff6666" }}>Tech Stack</span></h3>
                        {/* <h5 className="skill-heading" style={{ color: "rgb(147, 51, 234)" }}>The skills, tools and technologies I use to
                            bring your products to life:</h5> */}
                        {
                            skillsets.map((skills) => {
                                return <AboutCard skills={skills} />
                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutContent