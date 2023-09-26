import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Login from './Login';

test('testing signin form elements', () => {
  render(<Login />);

  const inputElements = screen.getAllByRole('textbox')
  const emailLabelElement = screen.getByLabelText(/email/i);
  const passwordLabelElement = screen.getByLabelText(/password/i);
  const buttonElementText = screen.getByRole('button', { name: 'OK' })

  expect(inputElements).toHaveLength(2)
  expect(emailLabelElement).toBeInTheDocument()
  expect(passwordLabelElement).toBeInTheDocument()
  expect(buttonElementText).toBeInTheDocument()
});

test('it should check that the email input element will be focused whenever the associated label is clicked', async () => {
  render(<Login />)

  const emailLabel = screen.getByText('Email');
  const emailInput = screen.getByLabelText('Email');

  userEvent.click(emailLabel);

  await waitFor(() => {
    expect(emailInput).toHaveFocus();
  });
})

test('it should check that the password input element will be focused whenever the associated label is clicked', async () => {
  render(<Login />)

  const passwordLabel = screen.getByText('Password');
  const passwordInput = screen.getByLabelText('Password');

  userEvent.click(passwordLabel);

  await waitFor(() => {
    expect(passwordInput).toHaveFocus();
  });
});

test('submit button is disabled by default', () => {
  render(<Login isLoggedIn={false} />);
  const submitButton = screen.getByText('OK');

  expect(submitButton).toBeDisabled();
});

test('submit button is enabled after changing input values', () => {
  render(<Login isLoggedIn={false} />);
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('OK');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  expect(submitButton).not.toBeDisabled();
});
