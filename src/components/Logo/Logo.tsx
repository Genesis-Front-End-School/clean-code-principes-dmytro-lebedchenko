import { Link } from 'react-router-dom';

import { ROUTE_PATH } from '../../app/consts';
import { LogoType } from '../../types/models';

type Props = {
  type: LogoType;
};

export const Logo: React.FC<Props> = ({ type }) => {
  const logoPath = (type === 'big')
    ? ROUTE_PATH.logo.big
    : ROUTE_PATH.logo.small;

  return (
    <Link to="/">
      <img
        src={logoPath}
        alt="logo"
      />
    </Link>
  );
};
