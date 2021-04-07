import React from 'react';
import '../../components/body/styles.js/styles.css';
import { Link } from 'react-router-dom';

function Switcher() {
  const navstyle = {
    color: 'white',
    TextDecoration: 'none',
    fontsize: '24px',
  };

  return (
    <div>
      <ul className="navigation">
        <Link style={navstyle} to="/">
          <li>movies</li>
        </Link>
        <Link style={navstyle} to="/series">
          <li>series</li>
        </Link>
        <Link style={navstyle} to="/general">
          <li>general</li>
        </Link>
      </ul>
    </div>
  );
}

export default Switcher;
