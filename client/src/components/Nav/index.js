import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark"> Google Books
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className = "navbar-brand" href="/api/books">Saved</a>
    </nav>
  );
}

export default Nav;
