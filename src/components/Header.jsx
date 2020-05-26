import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddTogle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showAddTogle}>
        {showAdd ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button>
    </section>
  );
};

Header.proptypes = {
  showAddTogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
