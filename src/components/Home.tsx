import React from 'react';

const Home = () => {
  return (
    <article id="top" className="wrapper style1">
      <div className="container">
        <div className="row">
          <div className="col-4 col-5-large col-12-medium">
            <span className="image fit profile">
              <img className="profile" src="images/profileImage.jpeg" alt="" />
            </span>
          </div>
          <div className="col-8 col-7-large col-12-medium">
            <header>
              <h1>
                hi I am <strong>Dara</strong>.
              </h1>
            </header>
            <p>
              And this is <strong>Miniport</strong>, a free, fully responsive HTML5 site template
              designed by <a href="http://twitter.com/ajlkn">AJ</a> for{' '}
              <a href="http://html5up.net">HTML5 UP</a> &amp; released under the{' '}
              <a href="http://html5up.net/license">CCA license</a>.
            </p>
            <a href="#work" className="button large scrolly">
              Learn about what I do
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
