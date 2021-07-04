import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Skills from './skills/Skills.jsx';
import Blog from './Blog/Blog';

function Home(){
    return (
        <div>
              <Hero />
              <About />
              <Projects />
              <Blog/>
              <Skills />
              <Contact />
        </div>
      );
    }
    export default Home;
