import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Footer from './Footer';
import App from '../App/App';
import newContext from '../App/AppContext';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('it should rendered without crashing', () => {
  render(<Footer />)

  const footerParagraph = screen.getByText(`Copyright ${getFullYear()} - ${getFooterCopy(true)}`);

  expect(footerParagraph).toHaveTextContent('Copyright 2023 - Holberton School')
});

test('verify that the link is not displayed when the user is logged out', () => {
  
    render(
      <newContext.Provider value={{}}>
        <App>
          <Footer />
        </App>
      </newContext.Provider>
    );
  
    const link = screen.queryByRole('link', { name: /contact us/i });
  
    expect(link).not.toBeInTheDocument()
});

test('verify that the link is displayed when the user is logged in', () => {
  const user = {
    email: 'test@example.com',
    password: 'password123',
    isLoggedIn: true
  }
  
  render(
    <newContext.Provider value={{user}}>
      <App>
        <Footer />
      </App>
    </newContext.Provider>
  );

  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('OK');

  fireEvent.change(emailInput, { target: { value: user.email } });
  fireEvent.change(passwordInput, { target: { value: user.password } });

  fireEvent.click(submitButton)

  const link = screen.getByRole('link', { name: /contact us/i });

  expect(link).toBeInTheDocument()
});
