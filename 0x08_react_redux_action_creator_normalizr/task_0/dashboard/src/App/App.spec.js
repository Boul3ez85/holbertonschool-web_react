import React, { useState as useStateMock } from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import newContext from './AppContext';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  cleanup;
});

test('it should render the Login component with all its elements whenever the "isLoggedIn" is set false', () => {
  render(<App/>);

  const emailLabelElement = screen.getByLabelText(/email/i)
  const passwordLabelElement = screen.getByLabelText(/password/i)

  expect(emailLabelElement).toBeInTheDocument();
  expect(passwordLabelElement).toBeInTheDocument();
});

test('it should render the CourseList table element with all its elements whenever the "isLoggedIn" is set true', () => {
  const user = {
    email: 'test@example.com',
    password: 'password123',
    isLoggedIn: true
  }

  render(
    <newContext.Provider value={{user}}>
      <App />
    </newContext.Provider>
  )

  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('OK');

  fireEvent.change(emailInput, { target: { value: user.email } });
  fireEvent.change(passwordInput, { target: { value: user.password } });
  fireEvent.click(submitButton)

  const tableElement = screen.getByRole('table')

  expect(tableElement).toBeInTheDocument();
});

test('it should call the logOut prop whenever the user hit "ctrl" + "h" keyboard keys', () => {
  const logoutSpy = jest.fn();

  render(<App logOut={logoutSpy} />);

  fireEvent.keyDown(document.body, {
    key: 'h',
    ctrlKey: true
  });

  expect(logoutSpy).toHaveBeenCalledTimes(1);
});

test('it should display an alert window whenever the user hit "ctrl" + "h" keyboard keys', () => {
  const logoutSpy = jest.fn();
  window.alert = jest.fn();
  
  render(<App logOut={logoutSpy} />);
  
  fireEvent.keyDown(document.body, { key: 'h', ctrlKey: true });
  
  expect(window.alert).toHaveBeenCalledWith('Logging you out');

  // const logoutSpy = jest.fn();
  
  // render(<App logOut={logoutSpy} />);
  
  // fireEvent.keyDown(document.body, { key: 'h', ctrlKey: true });

  // const alert = await screen.findByRole('alert');
  // expect(alert).toBeInTheDocument();
  // expect(alert).toHaveBeenCalledWith('Logging you out');
});

test('it should add the title of "course list" above the CourseList component when the isLoggedIn prop set to true', () => {
  const user = {
    email: 'test@example.com',
    password: 'password123',
    isLoggedIn: true
  }
  render(
    <newContext.Provider value={{user}}>
      <App />
    </newContext.Provider>
  )

  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('OK');

  fireEvent.change(emailInput, { target: { value: user.email } });
  fireEvent.change(passwordInput, { target: { value: user.password } });
  fireEvent.click(submitButton)

  expect(screen.getByRole('heading', { name: /course list/i })).toBeInTheDocument();
});

test('it should add the title of "Log in to continue" above the Login component when the isLoggedIn prop set to false', () => {
  render(<App />)

  expect(screen.getByRole('heading', { name: /log in to continue/i })).toBeInTheDocument();
});

test('it should render a heading element with a text "", and a paragraph with text ""', () => {
  render(<App />)

  expect(screen.getByRole('heading', { name: /news from the school/i})).toBeInTheDocument();
  expect(screen.getByText(/Holberton School news goes here/i)).toBeInTheDocument()
});

test('Verify that the login handler update the state correctly', () => {
  const user = {
    email: 'test@example.com',
    password: 'password123',
    isLoggedIn: true
  };

  render(
    <newContext.Provider value={{user}}>
      <App />
    </newContext.Provider>
  );

  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('OK');

  fireEvent.change(emailInput, { target: { value: user.email } });
  fireEvent.change(passwordInput, { target: { value: user.password } });
  fireEvent.click(submitButton);

  
})
