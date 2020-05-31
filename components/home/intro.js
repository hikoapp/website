import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import Logo from '../logo';
import Container from '../container';
import Campaign from './campaign';

const LogoContainer = () => {
  return (
    <div className={classNames('logo-main f4 fw6')}>
      <Link href="/">
        <a className={null} aria-label="Next.js">
          <Logo size={80} />
        </a>
      </Link>
    </div>
  );
}
export default function Intro() {
  return (
    <Container
      role="main"
      wide
      center
      overflow
      dotBackground
      minHeight={564}
      mobileStyle="min-height: 460px;"
      style={{
        display: 'flex',
        alignItems: 'flex-end'
      }}
    >
      <Container>
        <div className="intro-container">
          <LogoContainer/>
          <div className="campaign no-drag no-tap-highlight">
            <h1 className={classNames('title-1', 'fw6')}>The React Framework for</h1>
            <h2 className={classNames('title-2', 'fw7')}>
              <Campaign />
            </h2>
          </div>
        </div>
      </Container>

      <style jsx>{`
          .intro-container {
            margin: 0 0 2rem 0;
            overflow: visible;
          }
          h2 {
            margin-top: 1rem;
            margin-bottom: 2rem;
          }
          .campaign {
            width: 100%;
            letter-spacing: -0.02rem;
            overflow: hidden;
            cursor: default;
            z-index: -1;
            margin: 1rem 0 5rem;
          }
          .logo-main {
            display: flex;
            justify-content: center;
            color: #0070f3;
            margin: auto;
            margin-bottom: 2rem;
          }
          .title-1 {
            font-size: 1.5rem;
          }
          .title-2 {
            font-size: 4rem;
            margin-top: -5rem;
            margin-bottom: 0;
          }
          /* CSS only media query for mobile */
          @media screen and (max-width: 640px) {
            .title-1 {
              font-size: 22px;
            }
            .title-2 {
              font-size: 30px;
              margin-top: -2.4rem;
            }
            .campaign {
              margin: 0 0 2rem;
            }
          }
        `}</style>
    </Container>
  );
}
