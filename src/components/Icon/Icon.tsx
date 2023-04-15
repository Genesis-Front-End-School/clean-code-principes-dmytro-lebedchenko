import classNames from 'classnames';

import { IconType } from '../../types/IconType';
import './Icon.scss';

type Props = {
  type: IconType;
  addClassName?: string;
};

export const Icon: React.FC<Props> = ({ type, addClassName }) => (
  <span
    className={classNames(
      'icon',
      type,
      addClassName,
    )}
  />
);
