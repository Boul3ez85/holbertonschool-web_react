import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('should has a div with a margin-bottom style set 40px', () => {
  render(<BodySectionWithMarginBottom />);

  const divElement = screen.getAllByRole('generic');
  // console.log(divElement.length)
  expect(divElement[1]).toHaveClass('BodySectionWithMarginBottom_13jnc9w')
})