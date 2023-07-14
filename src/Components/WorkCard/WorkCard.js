import React from 'react'
import "../WorkCard/WorkCard.css"
import { NavLink } from 'react-router-dom'
import WorkCardData from '../WorkCard/WorkCardData'

function WorkCard() {
    return (
        <div className='work-container'>
            <h1 className='project-heading'> Projects</h1>
            <div className='project-container'>
                {WorkCardData.map((val, index) => {
                    return (
                        <div className='project-card'>
                            <img src={val.imgsrc} alt="image" />
                            <h2 className='project-title'>{val.title}</h2>
                            <div className='project-details'>
                                <p>{val.description}</p>
                                <div className='project-btns'>
                                    <NavLink to={val.view} className='btn'>Demo</NavLink>
                                    <NavLink to={val.code} className='btn'>Code</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkCard