import React, { useState, useEffect } from 'react';
import { BrowserRouter as BRouter, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from 'history';
import Home from './Home';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import BlogPost from './BlogPost/BlogPost';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

const history = createMemoryHistory();

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <div>
      <BRouter history={history}>
        <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
          <Navbar />
          <Switch>
          <Route path="/" exact component={() => <Home />} />
          {/* <Home/> */}
          <Route path="/blog" exact component={() => <BlogPost />} />
          {/* <BlogPost/> */}
          </Switch>
          <Footer />
        </PortfolioProvider>
        </BRouter>
  
    </div>
  );
}

export default App;
