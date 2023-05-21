import { render } from '@testing-library/react';

import {
  ErrorNotification,
} from '../../components/ErrorNotification/ErrorNotification';
import { ErrorType } from '../../types/enums';

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
