import { render } from '@testing-library/react';
import React from 'react';

import { App } from './App';

describe('App', () => {
  it('should render component', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
