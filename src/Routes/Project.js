import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ImageTemplate from '../Components/ImageTemplate/ImageTemplate'
import WorkCard from '../Components/WorkCard/WorkCard'

function Project() {
  return (
    <div>
      <Navbar />
      <ImageTemplate heading="Projects" text="Some of my most recent works." />
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Project