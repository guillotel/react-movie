import React from 'react';

const Header = () => {
  return (
    <div className="row">
      <div id="top1" className="col-lg-12">
        <h1>Top 20 Popular Movies</h1>
        <h4>Test of The Movie Database API</h4>
        <p>
          <a href="http://themoviedb.org/" target="_blank">
            <button className="btn btn-default">Get the code</button>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Header;
