import classNames from 'classnames';
import { useWindowSize } from 'courses-app-ui-tools';
import { Link } from 'react-router-dom';

import { ROUTE_PATH } from '../../../../services/app/consts';
import { useAppSelector } from '../../../../services/app/hooks';
import { Logo } from '../../ui';
import { ToTopButton } from '../../widgets';
import './Footer.scss';

export const Footer: React.FC = () => {
  const { width } = useWindowSize();
  const { isDarkMode } = useAppSelector(state => state.theme);

  const logoType = () => {
    switch (true) {
      case width > 640 && !isDarkMode:
        return 'big';

      case width > 640 && isDarkMode:
        return 'big-dark';

      default:
      case width < 640:
        return 'small';
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo type={logoType()} />

        <Link
          to={ROUTE_PATH.social.github}
          className={classNames('footer__link', {
            'footer__link--dark': isDarkMode,
          })}
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
