import { render } from '@testing-library/react';

import { ErrorType } from '../../../data/types/enums';
import {
  ErrorNotification,
} from '../../../views/components/common/ErrorNotification';

describe('"ErrorNotification" component', () => {
  it('should render the error message correctly', () => {
    const error = ErrorType.GET_COURSES;

    const { getByText } = render(
      <ErrorNotification error={error} />,
    );

    const errorMessage = getByText(`...${error}...`);

    expect(errorMessage).toBeInTheDocument();
  });
});
