import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg'

export const Contact = () =>{
    const formInitialDetails = {
        firstName: "",
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = () =>{

    }

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='Contact me'/>
                    </Col>
                        <Col md={6}>
                            <h2>Get in touch</h2>
                            <form action='https://getform.io/f/f9078515-7e12-403f-aa1c-3917ab23bf0f' method="POST" onSubmit={handleSubmit}>
                                <Row>
                                    <Col sm={6} className='px-1'>
                                        <input type="text" name='name' value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type="text" name='lastname' value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type="email" name='email' value={formDetails.email} placeholder="Email Adress" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type="tel" name='number' value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                    </Col>
                                    <Col>
                                    <textarea rows='6' name='message' value={formDetails.message} placeholder='Message...' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type='submit'><span>Send</span></button>
                                    </Col>
                                    
                                </Row>
                            </form>
                        </Col>
                </Row>
            </Container>
        </section>
    )
}