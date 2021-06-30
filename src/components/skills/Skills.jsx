import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Skills = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="skills-wrapper__info"> 
            <p className="skills-wrapper__info-text">
                <img height="40" width="40" src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png" alt="html" />
                </p>
              </div>
              <div>
              <p className="skills-wrapper__info-text">
              {paragraphOne || 'HTML5'}
              </p>
                </div>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__info">
                <p className="skills-wrapper__info-text">
                <img height="30" width="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/1200px-Devicon-css3-plain.svg.png" alt="css3logo" />
                </p>
              </div>
              <div>
              <p className="skills-wrapper__info-text">
              {paragraphOne || 'CSS3'}
              </p>
                </div>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="skills-wrapper__info">
            <p className="skills-wrapper__info-text">
                <img height="35" width="50" src="https://thumbs.dreamstime.com/b/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg" alt="js" />
                </p>
              </div>
              <div>
              <p className="skills-wrapper__info-text">
              {paragraphOne || 'JS'}
              </p>
                </div>
            </Fade>
          </Col>
        </Row>
       
        <Row className="skills-wrapper">
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="skills-wrapper__info">
            <p className="skills-wrapper__info-text">
                <img height="40" width="30" src="https://image.pngaaa.com/940/2196940-small.png" alt="php" />
                </p>
              </div>
              <div>
              <p className="skills-wrapper__info-text">
              {paragraphOne || 'PHP'}
              </p>
                </div>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__info">
              <p className="skills-wrapper__info-text">
                <img height="60" width="60" src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" alt="mysql" />
                </p>
              </div>
              <div>
              <p className="skills-wrapper__info-text">
              {paragraphOne || 'MYSQL'}
              </p>
                </div>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="skills-wrapper__info">
            <p className="skills-wrapper__info-text">
                <img height="35" width="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="bootstrap" />
                </p>
              </div>
              <div>
              <p className="skills-wrapper__info-text">
              {paragraphOne || 'BOOTSTRAP'}
              </p>
                </div>
            </Fade>
          </Col>
        </Row>
       
      </Container>
    </section>
  );
};


export default Skills;


