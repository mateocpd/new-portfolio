import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from '../assets/img/wallett.png'
import projImg2 from '../assets/img/pokemon.png'
import projImg3 from '../assets/img/creativepass.jpg'
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () =>{
    const projects = [
        {
            tittle: "Wallet App",
            description: "Your Money & Crypto",
            imgUrl: projImg1,
            projectUrl: "https://drive.google.com/file/d/1wwtzpL8ZTQVvH8Jf7LNGq7oM91mQl9ic/view?usp=sharing",
            projectCode: 'https://github.com/mateocpd/henry-pf-client',
        },
        {
            tittle: "Creative Login",
            description: "Creative Login",
            imgUrl: projImg3,
            projectUrl: "https://sign-in-mateo.netlify.app/",
            projectCode: 'https://github.com/mateocpd/Sing-in',
        },
        {
            tittle: "Pokemon App",
            description: "Find Your Pokemon",
            imgUrl: projImg2,
            projectUrl: "https://www.linkedin.com/feed/update/urn:li:activity:6952355501183496192/?utm_source=share&utm_medium=member_desktop",
            projectCode: 'https://github.com/mateocpd/PI-POKEMON',
        }
    ]
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyects</h2>
                        <p>Those are some of my proyects</p>
                        <Tab.Container id="proyects-tabs" defaultActiveKey="first">

                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item className="pageOne">
                                <Nav.Link eventKey='first'>Page 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="pageTwo">
                                <Nav.Link eventKey='second'>Page 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="pageThree">
                                <Nav.Link eventKey='third'>Page 3</Nav.Link>
                            </Nav.Item>
                           
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>{
                                    [projects[0]].map((project,index)=>{
                                        return(
                                             <ProjectCard
                                              key= {index}
                                              {...project}
                                              />
                                         )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <Row>{
                                    [projects[1]].map((project,index)=>{
                                        return(
                                             <ProjectCard
                                              key= {index}
                                              {...project}
                                              />
                                         )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <Row>{
                                    [projects[2]].map((project,index)=>{
                                        return(
                                             <ProjectCard
                                              key= {index}
                                              {...project}
                                              />
                                         )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' alt='projImg' src={colorSharp2}></img>
        </section>
    )
}