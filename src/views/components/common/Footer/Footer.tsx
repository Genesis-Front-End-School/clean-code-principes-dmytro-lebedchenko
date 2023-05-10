import { Link } from 'react-router-dom';

import { Logo } from '../../ui/Logo';
import { ToTopButton } from '../../widgets/ToTopButton';
import { useWindowSize } from '../../../../services/app/hooks';
import { ROUTE_PATH } from '../../../../services/app/consts';
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
