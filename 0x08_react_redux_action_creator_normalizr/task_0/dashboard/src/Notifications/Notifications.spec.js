import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StyleSheetTestUtils } from 'aphrodite';
import { getLatestNotification } from '../utils/utils'
import Notifications from './Notifications';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('it should display a title, button and a 3 list items, whenever the "displayDrawer" set to true', () => {
  const props = {
    listNotifications: [
      { id:1, type:'default', value:'New course available' },
      { id:2, type:'urgent', value:'New resume available' },
      { id:3, type:'urgent', html:{ __html: getLatestNotification()} }
    ], 
    displayDrawer: true
  }
  render(<Notifications {...props} />)

  const notificationsTitle = screen.getByText('Here is the list of notifications');
  const notificationsButton = screen.getByRole('button');
  const notificationsListItems = screen.getAllByRole('listitem');
  
  expect(notificationsTitle).toBeInTheDocument();
  expect(notificationsButton).toBeInTheDocument();
  expect(notificationsListItems).toHaveLength(3);
});

///=> This test is no longer PASS in the React State project
// test('it should log "Close button has been clicked" whenever the close button is clicked and, the "displayDrawer" set to true', () => {
//   const props = {
//     listNotifications: [
//       { id:1, type:'default', value:'New course available' },
//       { id:2, type:'urgent', value:'New resume available' },
//       { id:3, type:'urgent', html:{ __html: getLatestNotification()} }
//     ], 
//     displayDrawer: true
//   }
//   render(<Notifications {...props} />)

//   const notificationsButton = screen.getByRole('button');

//   const consoleSpy = jest.spyOn(console, 'log');

//   userEvent.click(notificationsButton);

//   expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');

//   consoleSpy.mockRestore();
// })

test('it should render the 3 given notifications text, whenever the "displayDrawer" set to true', () => {
  const props = {
    listNotifications: [
      { id:1, type:'default', value:'New course available' },
      { id:2, type:'urgent', value:'New resume available' },
      { id:3, type:'urgent', html:{ __html: getLatestNotification()} }
    ], 
    displayDrawer: true
  }
  render(<Notifications {...props} />)

  expect(screen.getByText('New course available')).toBeInTheDocument();
  expect(screen.getByText('New resume available')).toBeInTheDocument();
  expect(screen.getByText(/complete by EOD/)).toBeInTheDocument();
})

test('it should not display a title, button and a 3 list items, whenever the "displayDrawer" set to false', () => {
  const props = {
    listNotifications: [
      { id:1, type:'default', value:'New course available' },
      { id:2, type:'urgent', value:'New resume available' },
      { id:3, type:'urgent', html:{ __html: getLatestNotification()} }
    ], 
    displayDrawer: false
  }
  render(<Notifications {...props} />)

  const notificationsTitle = screen.queryByText('Here is the list of notifications');
  const notificationsButton = screen.queryByRole('button');
  const notificationsListItems = screen.queryAllByRole('listitem');
  
  expect(notificationsTitle).toBeNull();
  expect(notificationsButton).toBeNull();
  expect(notificationsListItems).toHaveLength(0);
});

test('it should display a paragraph of "No new notification for now" whenever the listNotification prop is empty', () => {
  const props = {
    listNotifications: [], 
    displayDrawer: true
  }
  render(<Notifications {...props} />)

  const notificationsTitle = screen.getByText('No new notification for now');
  
  expect(notificationsTitle).toBeInTheDocument();
});

test('it should log to the console the "Notification id has been marked as read" with the correct notification item id', () => {
  const props = {
    listNotifications: [
      { id:1, type:'default', value:'New course available' },
      { id:2, type:'urgent', value:'New resume available' },
      { id:3, type:'urgent', html:{ __html: getLatestNotification()} }
    ], 
    displayDrawer: true
  }
  render(<Notifications {...props} />);

  const firstListItemElement = screen.getAllByRole('listitem')[0];

  const consoleSpy = jest.spyOn(console, 'log');

  fireEvent.click(firstListItemElement)

  expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read')
});


test('it should rerender when the prop "displayDrawer" change its value', () => {
  const initialProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  // Render the component with initial props
  render(<Notifications {...initialProps} />);

  // Assert that the component is initially rendered
  expect(screen.queryByText('Here is the list of notifications')).toBeNull()
});

test('it should rerender when the prop "listNotifications" change its value', () => {
  const updatedProps = {
    displayDrawer: true,
    listNotifications: [
      { id: 1, type: 'default', value: 'New notification' }
    ],
  };
  render(<Notifications {...updatedProps} />);

  expect(screen.queryByText('No new notification for now')).toBeNull()
});

test('should call the "handleDisplayDrawer" props whenever the "Your notifications" is clicked', () => {
  const handleDisplayDrawerMock = jest.fn()

  render(<Notifications handleDisplayDrawer={handleDisplayDrawerMock} />)

  const notificationText = screen.getByText(/your notifications/i);
  
  fireEvent.click(notificationText)
  
  expect(handleDisplayDrawerMock).toHaveBeenCalled()
})

test('should call the "handleDHieDrawer" props whenever the close button is clicked', () => {
  const handleHideDrawerMock = jest.fn();
  const notificationsMock = [
    { id:1, type:'default', value:'dummy value' },
  ]
  
  render(
    <Notifications 
      displayDrawer={true} 
      handleHideDrawer={handleHideDrawerMock}
      listNotifications={notificationsMock}
    />
  )
    
  const closeButton = screen.getByLabelText(/close/i);
  
  fireEvent.click(closeButton)
  
  expect(handleHideDrawerMock).toHaveBeenCalled()
})
