import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ImageTemplate from '../Components/ImageTemplate/ImageTemplate'
import Form from '../Components/Form/Form'

function Contact() {
    return (
        <div>
            <Navbar />
            <ImageTemplate heading="Contact" text="I'd love to hear from you." />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact