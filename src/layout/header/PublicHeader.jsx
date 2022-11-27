import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PublicHeader = () => (
  <ul className="navbar-nav align-items-lg-center ml-lg-auto">
    <li className="nav-item mr-2">
      <a className="nav-link" href={`${process.env.NEXT_PUBLIC_REDIRECT_LINK}/sign-in`}>
        Log In
      </a>
    </li>
    <li className="nav-item mr-0">
      <a
        className="btn btn-sm btn-white btn-circle btn-icon d-none d-lg-inline-flex"
        href={`${process.env.NEXT_PUBLIC_REDIRECT_LINK}/sign-up`}
      >
        <span className="btn-inner--icon mr-2">
          <FontAwesomeIcon icon="user-plus" style={{ width: '17.5px', height: '14px' }} />
        </span>
        <span className="btn-inner--text">Sign Up</span>
      </a>
    </li>
  </ul>
);

export default PublicHeader;
