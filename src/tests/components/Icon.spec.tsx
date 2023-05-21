import { render } from '@testing-library/react';

import { Icon } from '../../components/Icon/Icon';
import { IconType } from '../../types/enums';

describe('"Icon" component', () => {
  it('should render with additional class name', () => {
    const { container } = render(
      <Icon
        type={IconType.ARROW_LEFT}
        addClassName="additional-class"
      />,
    );

    const iconElement = container.querySelector('.icon');

    expect(iconElement).toHaveClass('additional-class');
  });

  it('should render different icon types', () => {
    const { container } = render(
      <>
        <Icon type={IconType.ARROW_LEFT} />
        <Icon type={IconType.ARROW_RIGHT} />
        <Icon type={IconType.ARROW_UP} />
      </>,
    );

    const arrowLeft = container.querySelector('.icon__arrow-left');
    const arrowRight = container.querySelector('.icon__arrow-right');
    const arrowUp = container.querySelector('.icon__arrow-up');

    expect(arrowLeft).toBeInTheDocument();
    expect(arrowRight).toBeInTheDocument();
    expect(arrowUp).toBeInTheDocument();
  });
});
