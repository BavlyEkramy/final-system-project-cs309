import React from 'react';
import { Link } from 'react-router-dom';
const LinkPage = () => {
 return (
    <div>
      <ul>
        <li>
          <Link to="/AboutPage" target="_blank">story</Link>
        </li>
        {/* Add more links here */}
      </ul>
    </div>
 );
};

export default LinkPage;;