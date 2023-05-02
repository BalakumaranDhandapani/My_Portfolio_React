import '../ImageTemplate/ImageTemplate.css'

import React from 'react'

function ImageTemplate({ heading, text }) {
    return (
        <div className='hero2-image'>
            <div className='page-heading'>
                <h1 style={{ textTransform: "uppercase" }} >{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ImageTemplate