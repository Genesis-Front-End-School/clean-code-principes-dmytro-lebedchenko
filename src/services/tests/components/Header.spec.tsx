import { RenderResult, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Header } from '../../../views/components/common';
import { store } from '../../app/store';

describe('"Header" component', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render correctly', () => {
    const header = wrapper.container.querySelector('.header');

    expect(header).toBeInTheDocument();
  });

  it('should render "Logo"', () => {
    const logo = wrapper.getByAltText('logo');

    expect(logo).toBeInTheDocument();
  });
});
