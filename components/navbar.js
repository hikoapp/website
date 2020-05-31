import { memo } from 'react';
import Link from 'next/link';

import NextLogo from './logo';
import Container from './container';
import GitHubLogo from './icons/github';

function Navbar() {

  return (
    <Container center>
      <nav>
        <div className="links">
          <Link href="/">
            <a className="logo">
              <NextLogo />
            </a>
          </Link>

          <a
            href="https://github.com/vercel/next.js"
            aria-label="Next.js on GitHub"
            rel="noopener noreferrer"
            target="_blank"
            className="icon mute"
          >
            <GitHubLogo color="currentColor" />
          </a>
        </div>
      </nav>

      <style jsx>{`
        nav {
          position: relative;
          flex: 1;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .links {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 1;
        }

        .links a:hover {
          color: #000;
        }

        .links a:last-child {
          display: flex;
        }

      `}</style>
    </Container>
  );
}

export default memo(Navbar);
