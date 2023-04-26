import { Link } from 'react-router-dom';

import { ROUTE_PATH } from '../../app/consts';
import { useWindowSize } from '../../app/hooks';
import { Logo } from '../Logo';
import { ToTopButton } from '../ToTopButton';
import './Footer.scss';

export const Footer: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo type={(width > 640) ? 'big' : 'small'} />

        <Link
          to={ROUTE_PATH.social.github}
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </Link>

        <ToTopButton />
      </div>
    </footer>
  );
};
