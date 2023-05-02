import React from 'react'
import "../WorkCard/WorkCard.css"
import { NavLink } from 'react-router-dom'

function WorkCard() {
    return (
        <div className='work-container'>
            <h1 className='project-heading'> Projects</h1>
            <div className='project-container'>
                <div className='project-card'>
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20211118/pngtree-blue-round-technology-dashboard-image_908916.jpg" alt="image" />
                    <h2 className='project-title'>Project Title</h2>
                    <div className='project-details'>
                        <p>This is text paragraph</p>
                        <div className='project-btns'>
                            <NavLink to={'www.google.com'} className='btn'>View</NavLink>
                            <NavLink to={'www.google.com'} className='btn'>Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard