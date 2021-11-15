import React from 'react';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Notifications from './Notifications';

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
