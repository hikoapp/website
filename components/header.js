import { memo } from 'react';

import Nav from './navbar';

const Header = () => {
  return (
    <>
      <header>
        <Nav />
      </header>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          background: #fff;
          z-index: 1000;
          border-bottom: 1px solid #eaeaea;
        }
        header.sticky {
          position: sticky;
          top: 0;
        }
      `}</style>
    </>
  );
};

export default memo(Header);
