import { Link } from 'react-router-dom';

import { IconType } from '../../../../data/types/enums';
import { Icon } from '../../ui/Icon';
import './BackButton.scss';

export const BackButton: React.FC = () => (
  <Link
    to="/"
    className="back-button"
    type="button"
    data-testid="back-button"
  >
    <Icon
      type={IconType.ARROW_LEFT}
      addClassName="back-button__arrow"
    />

    Back
  </Link>
);
