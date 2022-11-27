/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Row, Col, Button as BSButton } from 'reactstrap';

import Link from 'components/common/Link';

import footerLinks from 'helpers/data/footerLinks';

const copyrightStartYear = 2019;
const companyName = 'Divorcepath Corp.';
const missionStatement =
  'Our mission to simplify the divorce process. We make spousal support and child support calculators used by family law professionals and families across Canada.';

const copyrightYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear === copyrightStartYear
    ? copyrightStartYear
    : `${copyrightStartYear}-${currentYear}`;
};

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-cta">
        <h2>Find your path.</h2>
        <p>
          Upgrade for courtroom-ready child support & spousal support reports, plus premium
          calculator features.
        </p>

        <a href={`${process.env.NEXT_PUBLIC_REDIRECT_LINK}/upgrade`}>
          <BSButton type="button" color="primary" className="custom-button">
            Upgrade Now
          </BSButton>
        </a>
      </div>
      <div className="footer">
        <Row className="mb-5">
          <Col md={5} lg={4}>
            <a
              className="navbar-brand mr-5 mb-2"
              href={`${process.env.NEXT_PUBLIC_REDIRECT_LINK}/sign-in`}
            >
              <img
                alt="Divorcepath.com - online divorce"
                src="/canada/images/brand/divorcepath-blue.svg"
                className="placeholderImg"
                width="280px"
                height="51px"
              />
            </a>
            <p className="mr-4 mb-5">{missionStatement}</p>
          </Col>
          <Col md={7} lg={8}>
            <Row>
              {footerLinks.map(({ links, name: sectionName }) => (
                <Col md={6} lg={3} key={sectionName}>
                  <h6>{sectionName}</h6>
                  <ul>
                    {links.map(({ name, href }) => (
                      <li key={name}>
                        <Link href={href || '/'}>{name}</Link>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="show-grid justify-content-between">
          <p className="pull-left">
            &copy; {copyrightYear()} {companyName}
          </p>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Footer;
