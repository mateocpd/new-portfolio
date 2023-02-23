import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Banner =() =>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi i'm webdecoded`}<span className="wrap">web developer</span></h1>
                        <p>Lorem</p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img alt="Header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}