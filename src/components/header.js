import React from 'react';

const Header = () => {
  return (
    <div className="row">
      <div id="topBanner" className="col-lg-12">
        <h1>Trending Movies</h1>
        <h4>The liste of the 25 most popular movies right now</h4>
        <br />
        <p>
          <a href="https://github.com/guillotel/react-movie" target="_blank">
            <button className="btn btn-default">Get the code</button>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Header;
