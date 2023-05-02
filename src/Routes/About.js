import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ImageTemplate from '../Components/ImageTemplate/ImageTemplate'
import AboutContent from '../Components/AboutContent/AboutContent'
import AboutCard from '../Components/AboutContent/AboutCard'

function About() {
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
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      skillname: "React js",
      subs: "reactjs-image"
    },
  ]
  return (
    <div>
      <Navbar />
      <ImageTemplate heading="About" text="I'm a Friendly Developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About