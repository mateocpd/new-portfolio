import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { BsArrowRightCircle } from "react-icons/bs"
import headerImg from "../assets/img/header-img.svg"

export const Banner =() =>{
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Full Stack Developer", "Engineering Student"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(()=> {
        let ticker = setInterval(()=>{
            tick();    
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum +1 )
            setDelta(500)


        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi i'm Mateo `}<span className="wrap">{text}</span></h1>
                        <p>I am a Systems Engineering student. Graduated as a full stack web programmer and a programming lover. As an organized person capable of solving problems, I can adapt to any type of circumstance and likewise give the best of me in each project, in this way teamwork and camaraderie are some of my strengths.
                            My personal goal is to acquire knowledge and develop professionally in my sector, So I look for opportunities that allow me to do it. At the same time commit to the goals of the company</p>
                        <a href='#connect' className="text-decoration-none">
                        <button onClick={() => console.log('connect')}>Let&apos;s connect<BsArrowRightCircle size={25}/></button>
                        </a>   
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}