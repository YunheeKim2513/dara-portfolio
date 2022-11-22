import React from 'react';

const PortFolio = () => {
  return (
    <article id="portfolio" className="wrapper style3">
      <div className="container">
        <header>
          <h2>Here’s some stuff I made recently.</h2>
          <p>Proin odio consequat sapien vestibulum consequat lorem dolore feugiat.</p>
        </header>
        <div className="row">
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
              <a href="#" className="image featured">
                <img src="images/pic01.jpg" alt="" />
              </a>
              <h3>
                <a href="#">Magna feugiat</a>
              </h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
              <a href="#" className="image featured">
                <img src="images/pic02.jpg" alt="" />
              </a>
              <h3>
                <a href="#">Veroeros primis</a>
              </h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
              <a href="#" className="image featured">
                <img src="images/pic03.jpg" alt="" />
              </a>
              <h3>
                <a href="#">Lorem ipsum</a>
              </h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
              <a href="#" className="image featured">
                <img src="images/pic04.jpg" alt="" />
              </a>
              <h3>
                <a href="#">Tempus dolore</a>
              </h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
              <a href="#" className="image featured">
                <img src="images/pic05.jpg" alt="" />
              </a>
              <h3>
                <a href="#">Feugiat aliquam</a>
              </h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
              <a href="#" className="image featured">
                <img src="images/pic06.jpg" alt="" />
              </a>
              <h3>
                <a href="#">Sed amet ornare</a>
              </h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
        </div>
        <footer>
          <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
          <a href="#contact" className="button large scrolly">
            Get in touch with me
          </a>
        </footer>
      </div>
    </article>
  );
};

export default PortFolio;
