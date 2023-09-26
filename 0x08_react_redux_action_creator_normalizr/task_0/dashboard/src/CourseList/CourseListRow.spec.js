import React from 'react';
import { render, screen, within } from '@testing-library/react';
import CourseListRow from './CourseListRow';

test('it should display 2 "th" element whenever the isHeader props set to true, and textSecondCell not null', () => {
  const props = {
    isHeader: true,
    textFirstCell: 'dummy title',
    textSecondCell: 'dummy description'
  };

  render(<CourseListRow {...props} />);

  const trElement = screen.getByRole('row');
  const thElement = within(trElement).getAllByRole('columnheader');

  expect(trElement).toBeInTheDocument();
  expect(thElement).toHaveLength(2);

  expect(trElement).toHaveStyle({backgroundColor: 'rgb(222, 181, 181)'});
});

test('it should display 1 "th" element whenever the isHeader props set to true, and textSecondCell null', () => {
  const props = {
    isHeader: true,
    textFirstCell: 'dummy title',
    textSecondCell: null
  };

  render(<CourseListRow {...props} />);

  const trElement = screen.getByRole('row');
  const thElement = within(trElement).getAllByRole('columnheader');

  expect(trElement).toBeInTheDocument();
  expect(thElement).toHaveLength(1);
})

test('it should display 2 "td" element whenever the "isHeader" props set to false', () => {
  render(<CourseListRow isHeader={false} />)

  const trElement = screen.getByRole('row');
  const tdElement = within(trElement).getAllByRole('cell');

  expect(trElement).toHaveStyle({backgroundColor: 'rgb(214, 210, 210)'});
  expect(tdElement).toHaveLength(2);
});

test('it should display 1 "th" element whenever the "isHeader" props set to true, and "textSecondCell" set to null', () => {
  const props = {
    isHeader: true,
    textSecondCell: null
  }
  render(<CourseListRow {...props} />)

  const thElement = screen.getByRole('columnheader');

  expect(thElement).toHaveAttribute('colSpan', '2');
});

test('it should display 2 "th" elements whenever the "isHeader" props set to true, and "textSecondCell" is not null', () => {
  const props = {
    isHeader: true,
    textSecondCell: 'dummy title'
  }
  render(<CourseListRow {...props} />)

  const thElements = screen.getAllByRole('columnheader');

  expect(thElements).toHaveLength(2);
});

test('it should render 2 "td" elements inside a "tr" element whenever the "isHeader" prop is set to false', () => {
  render(<CourseListRow isHeader={false}/>)

  const trElement = screen.getByRole('row');
  const tdElement = within(trElement).getAllByRole('cell');

  expect(trElement).toBeInTheDocument()
  expect(tdElement).toHaveLength(2)
});
