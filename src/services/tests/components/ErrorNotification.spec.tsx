import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { ErrorType } from '../../../data/types/enums';
import { ErrorNotification } from '../../../views/components/common';
import { store } from '../../app/store';

describe('"ErrorNotification" component', () => {
  it('should render the error message correctly', () => {
    const error = ErrorType.GET_COURSES;

    const { getByText } = render(
      <Provider store={store}>
        <ErrorNotification error={error} />
      </Provider>,
    );

    const errorMessage = getByText(`...${error}...`);

    expect(errorMessage).toBeInTheDocument();
  });
});
