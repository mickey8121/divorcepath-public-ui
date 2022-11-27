import React, { useMemo } from 'react';
import classnames from 'classnames';

import ProgressiveImage from 'react-progressive-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PublicHeader from 'layout/header/PublicHeader';

import RawHeader from 'components/common/header/Header';

import useCalculationContext from 'hooks/useCalculationContext';

const bgParkMin = '/canada/images/backgrounds/bg-park-min.webp';
const bgPark = '/canada/images/backgrounds/bg-park.webp';
const canada = '/canada/images/icons/flags/ca.svg';
const divorcepathWhite = '/canada/images/brand/divorcepath-white.svg';

const Header = () => {
  const { calculatorType } = useCalculationContext();

  const headerClassName = useMemo(
    () =>
      classnames(
        'header-container feature-cover',
        calculatorType === 'CHILD' ? 'child-header' : 'spousal-header',
      ),
    [calculatorType],
  );

  return (
    <div className={headerClassName}>
      <ProgressiveImage src={bgPark} placeholder={bgParkMin}>
        {src => <img src={src} alt="background" width="100%" height="auto" />}
      </ProgressiveImage>
      <header className="header-transparent" id="header-main">
        <div id="navbar-top-main" className="navbar-top  navbar-dark border-bottom">
          <div className="container pr-0">
            <div className="navbar-nav align-items-center">
              <div className="d-none d-lg-inline-block">
                <span className="navbar-text mr-3">
                  <a href="https://www.divorcepath.com">Divorcepath.com - online divorce</a>
                </span>
              </div>
              <div>
                <ul className="nav">
                  <li className="nav-item dropdown ml-lg-2 dropdown-animate" data-toggle="hover">
                    <a
                      className="nav-link px-0"
                      href={`${process.env.NEXT_PUBLIC_REDIRECT_LINK}/sign-in`}
                    >
                      <img alt="Canadian Flag" src={canada} width={20} height={14} />
                      <span className="d-none d-lg-inline-block">Canada - English</span>
                      <span className="d-lg-none">EN</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ml-auto">
                <ul className="nav">
                  <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.divorcepath.com/help">
                        <FontAwesomeIcon
                          icon="book"
                          className="mr-2"
                          style={{ width: '12.25px', height: '14px' }}
                        />
                        Help Centre
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-main navbar-expand-lg navbar-transparent" id="navbar-main">
          <div className="container pr-0">
            <a href="https://www.divorcepath.com" className="navbar-brand mr-0 mr-lg-5">
              <div className="placeholderImg">
                <img
                  alt="Divorcepath.com - online divorce"
                  src={divorcepathWhite}
                  layout="responsive"
                  width='180px'
                  height='50px'
                />
              </div>
            </a>
            <div>
              <PublicHeader />
            </div>
          </div>
        </nav>
      </header>
      <RawHeader />
    </div>
  );
};

export default Header;
