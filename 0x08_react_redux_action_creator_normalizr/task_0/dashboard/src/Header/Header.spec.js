import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import newContext from '../App/AppContext.js';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const convertHexToRGBA = (hexCode) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    console.log({hex})
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
};

test('should contain a <p/> element with specific text, <h1/>, and an <img/>', () => {
  render(<Header isLoggedIn={true} />);

  const headingElement = screen.getByRole('heading', {name: 'School Dashboard'});
  const imgElement = screen.getByAltText('holberton logo')

  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveStyle({color: convertHexToRGBA('#e1003c') })
  expect(imgElement).toBeInTheDocument();
});

test('Header component with logged-in user displays logout section', () => {
  const user = {
    email: 'test@example.com',
    password: 'password123',
    isLoggedIn: true,
  };

  render(
    <newContext.Provider value={{ user }}>
      <Header />
    </newContext.Provider>
  );

  const emailElement = screen.getByText(user.email);
  const logoutLinkElement = screen.getByText('(logout)');

  expect(emailElement).toBeInTheDocument();
  expect(logoutLinkElement).toBeInTheDocument();
});

test('Clicking on the logout link calls the logOut function', () => {
  const user = {
    email: 'test@example.com',
    password: 'password123',
    isLoggedIn: true,
  };

  const logOutSpy = jest.fn();

  render(
    <newContext.Provider value={{ user, logOut: logOutSpy }}>
      <Header />
    </newContext.Provider>
  );

  const logoutLink = screen.getByText('(logout)');
  fireEvent.click(logoutLink);

  expect(logOutSpy).toHaveBeenCalled();
});

test('Header component with default context value does not display logout section', () => {
  render(
    <newContext.Provider value={{ user: { isLoggedIn: false } }}>
      <Header />
    </newContext.Provider>
  );

  const emailElement = screen.queryByText('test@example.com');
  const logoutLinkElement = screen.queryByText('(logout)');

  expect(emailElement).not.toBeInTheDocument();
  expect(logoutLinkElement).not.toBeInTheDocument();
});
