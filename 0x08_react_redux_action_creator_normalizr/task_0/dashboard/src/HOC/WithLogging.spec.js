import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import WithLogging from './WithLogging';

afterEach(cleanup)

class MockApp extends React.Component {
  render () {
    return (
      <h1>
        Hello from Mock App Component
      </h1>
    )
  }
}

const MockWithHOC = WithLogging(MockApp)

test('can render with redux with defaults', () => {
  render(<MockWithHOC />)
  expect(screen.getByRole('heading', { name: /hello from mock app component/i })).toBeInTheDocument();
})