import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Header({ setIsAdding }) {
  return (
    <header>
      <h1 className="fw-bold pt-5 pb-3">Employee Management Software</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          <FontAwesomeIcon icon={faUserPlus} /> Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;
