import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";  
import javascript from '../assets/img/javascript.png'
import react from '../assets/img/react.png'
import redux from '../assets/img/redux.png'
import git from '../assets/img/git.png'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import next from '../assets/img/nextjs.png'
import bootstrap from '../assets/img/bootstrap.png'
import tailwind from '../assets/img/tailwind.png'
import python from '../assets/img/python.png'
import node from '../assets/img/node.png'
import sequelize from '../assets/img/sequelize.png'
import postgresql from '../assets/img/postgresql.png'
import prisma from '../assets/img/prisma.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>
                            These are some of the skills that i use
                        </p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={javascript} alt='img-skill'></img>
                            <h5> Javascript</h5>
                        </div>
                        <div className='item'>
                            <img src={react} alt='img-skill'></img>
                            <h5> React</h5>
                        </div>
                        <div className='item'>
                            <img src={redux} alt='img-skill'></img>
                            <h5> Redux</h5>
                        </div>
                        <div className='item'>
                            <img src={git} alt='img-skill'></img>
                            <h5> Git</h5>
                        </div>
                        <div className='item'>
                            <img src={html} alt='img-skill'></img>
                            <h5> HTML</h5>
                        </div>
                        <div className='item'>
                            <img src={css} alt='img-skill'></img>
                            <h5> CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={bootstrap} alt='img-skill'></img>
                            <h5> Bootstrap</h5>
                        </div>
                        <div className='item'>
                            <img src={tailwind} alt='img-skill'></img>
                            <h5> Tailwind.css</h5>
                        </div>
                        <div className='item'>
                            <img src={next} alt='img-skill'></img>
                            <h5> Next.js</h5>
                        </div>
                        <div className='item'>
                            <img src={python} alt='img-skill'></img>
                            <h5> Python</h5>
                        </div>
                        <div className='item'>
                            <img src={node} alt='img-skill'></img>
                            <h5> Node.js</h5>
                        </div>
                        <div className='item'>
                            <img src={sequelize} alt='img-skill'></img>
                            <h5> Sequelize</h5>
                        </div>
                        <div className='item'>
                            <img src={postgresql} alt='img-skill'></img>
                            <h5> PostgreSQL</h5>
                        </div>
                        <div className='item'>
                            <img src={prisma} alt='img-skill'></img>
                            <h5> PrismaDB</h5>
                        </div>
                                                                        
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
      
}