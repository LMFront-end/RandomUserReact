import React from 'react';

const Footer = () => {
  return (
    <footer class="footer__container" id="entrevistas">

      <h4 class="copy">
        &copy; 2022-LinaDev
      </h4>

      <div class="sociales">

        <a href="https://www.spotify.com/bo/">
          {' '}<i class="fab fa-spotify fa-2x" />
        </a>

        <a href="https://www.instagram.com/?hl=es">
          <i class="fab fa-instagram-square fa-2x" />
        </a>

        <a href="https://twitter.com/?lang=es">
          <i class="fab fa-twitter fa-2x" />
        </a>

        <a href="https://www.facebook.com/">
          <i class="fab fa-facebook fa-2x" />
        </a>

        <a href="https://web.telegram.org/">
          <i class="fab fa-telegram fa-2x" />
        </a>
      </div>
    </footer>
  );
};

export {Footer};
