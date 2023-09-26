import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

test('it has a div element with the class "bodySection"', () => {
  render(<BodySection />)

  const divElement = screen.getAllByRole('generic')[1];

  expect(divElement).toHaveClass('bodySection')
});
