import React from 'react';

const Footer = () => {
  return (
    <footer className="footer__container" id="entrevistas">

      <h4 className="copy">
        &copy; 2022-LinaDev
      </h4>

      <div className="sociales">

        <a href="https://www.spotify.com/bo/">
          {' '}<i className="fab fa-spotify fa-2x" />
        </a>

        <a href="https://www.instagram.com/?hl=es">
          <i className="fab fa-instagram-square fa-2x" />
        </a>

        <a href="https://twitter.com/?lang=es">
          <i className="fab fa-twitter fa-2x" />
        </a>

        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook fa-2x" />
        </a>

        <a href="https://web.telegram.org/">
          <i className="fab fa-telegram fa-2x" />
        </a>
      </div>
    </footer>
  );
};

export {Footer};
