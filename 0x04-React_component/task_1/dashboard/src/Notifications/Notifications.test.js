import React from 'react';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

configure({adapter: new Adapter()});

describe("Testing the <Notifications /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
	  wrapper = shallow(<Notifications />);
	});

	it("<Notifications /> is rendered without crashing", () => {
	  expect(wrapper).to.not.be.an('undefined');
	});

	it("<Notifications /> renders three list items", () => {
      expect(wrapper.find('NotificationItem')).to.have.lengthOf(3);
	});

	it("<Notifications /> render the text 'Here is the list of notifications'", () => {
		expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(false);
	});

	it('menuItem with displayDrawer false', () => {
		const wrapper = shallow(<Notifications />);
		const mItem = wrapper.find('div.menuItem');
		expect(mItem).to.have.lengthOf(1);
	  });
	
	  it('Notification with displayDrawer false', () => {
		const wrapper = shallow(<Notifications />);
		const dNoti = wrapper.find('div.Notifications');
		expect(dNoti).to.have.lengthOf(0);
	  });
	
	  it('menuItem with displayDrawer true', () => {
		const wrapper = shallow(<Notifications displayDrawer />);
		const mItem = wrapper.find('div.menuItem');
		expect(mItem).to.have.lengthOf(1);
	  });
	
	  it('displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer />);
		const dNoti = wrapper.find('div.Notifications');
		expect(dNoti).to.have.lengthOf(1);
	  });
});

describe('listNotifications with values', () => {
	let latestNotification = undefined;
	let listNotifications = undefined;
  
	beforeEach(() => {
	  latestNotification = getLatestNotification();
	  listNotifications = [
		{ id: 1, type: 'default', value: 'New course available' },
		{ id: 2, type: 'urgent', value: 'New resume available' },
		{ id: 3, type: 'urgent', html: { __html: latestNotification } },
	  ];
	});
  
	it('values', () => {
	  const wrapper = shallow(
		<Notifications displayDrawer listNotifications={listNotifications} />
	  );
	  expect(wrapper.exists());
	  const nItem = wrapper.find('NotificationItem');
	  expect(nItem).to.not.be.undefined;
	  expect(nItem).to.have.lengthOf(3);
	  expect(nItem.at(0).html()).to.equal(
		'<li data-notification-type="default">New course available</li>'
	  );
	  expect(nItem.at(1).html()).to.equal(
		'<li data-notification-type="urgent">New resume available</li>'
	  );
	  expect(nItem.at(2).html()).to.equal(
		`<li data-notification-type="urgent">${latestNotification}</li>`
	  );
	});
  });
  
  describe('listNotifications without values', () => {
	let listNotifications = undefined;
	beforeEach(() => {
	  listNotifications = [];
	});
  
	it('empty', () => {
	  const wrapper = shallow(
		<Notifications displayDrawer listNotifications={listNotifications} />
	  );
	  expect(wrapper.exists());
	  const nItem = wrapper.find('NotificationItem');
	  expect(nItem).to.have.lengthOf(1);
	  expect(nItem.html()).to.equal(
		'<li data-notification-type="default">No new notification for now</li>'
	  );
	});
  
	it('without listNotifications', () => {
	  const wrapper = shallow(<Notifications displayDrawer />);
	  const nItem = wrapper.find('NotificationItem');
	  expect(nItem).to.have.lengthOf(1);
	  expect(nItem.html()).to.equal(
		'<li data-notification-type="default">No new notification for now</li>'
	  );
	});
  });
