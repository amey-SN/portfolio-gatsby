import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
// import { Icon, InlineIcon } from '@iconify/react';
// import codechefIcon from '@iconify-icons/simple-icons/codechef';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                  {/* <Icon icon={$name} /> */}
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} Portfolio project developed under the guidance of {' '}
          <a href="https://Agarkarmedia.com" target="_blank" rel="noopener noreferrer">
          Agarkar Media
          </a>
        </p>

        {/* {isEnabled && <GithubButtons />} */}
      </Container>
    </footer>
  );
};

export default Footer;
