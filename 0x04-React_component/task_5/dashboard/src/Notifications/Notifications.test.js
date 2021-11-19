import 'jsdom-global/register';
import React from 'react';
import chai, { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import WithLogging from '../HOC/WithLogging.js';
import sinonChai from 'sinon-chai';
import { spy } from 'sinon';

chai.use(sinonChai);

configure({adapter: new Adapter()});

describe("Testing the <Notifications /> wrapper2", () => {
  let i = 0;

	let listNotifications = [
		{ id: i++, type: "default", value: "New course available" },
		{ id: i++, type: "urgent", value: "New resume available" },
		{ id: i++, type: "urgent", html: {__html: getLatestNotification()} }
	];

	let props1 = {
		displayDrawer: false,
	};
	let props2 = {
		displayDrawer: true,
		listNotifications: listNotifications,
	};
	let wrapper1;
	let wrapper2;

	beforeEach(() => {
		wrapper1 = shallow(<Notifications shouldRender {...props1} />);
		wrapper2 = shallow(<Notifications {...props2} />);
	});

	it("<Notifications /> is rendered without crashing", () => {
		expect(wrapper1.render()).to.not.be.an('undefined');
	});

	it("<Notifications /> is rendered without crashing if listNotifications isn't passed", () => {
		expect(wrapper1.render()).to.not.be.an('undefined');
	});

	it("<Notifications /> is rendered without crashing if listNotifications is empty", () => {
		let props1 = {
			displayDrawer: false,
			listNotifications: [],
		};

		let wrapper1 = shallow(<Notifications shouldRender {...props1} />);
		expect(wrapper1.render()).to.not.be.an('undefined');
	});

	it("<Notifications /> renders the first <NotificationItem /> element with the right HTML", () => {
		expect(wrapper2.find('ul').childAt(0).html()).to.equal('<li data-priority-type="default">New course available</li>');
	});

	it("<Notifications /> render the text 'Here is the list of notifications'", () => {
		expect(wrapper2.contains(<p>Here is the list of notifications</p>)).to.equal(true);
	});

	it("Test that the menu item is being displayed when displayDrawer is false", () => {
		expect(wrapper1.exists(".menuItem")).to.equal(true);
	});

	it("Test that the div.Notifications is not being displayed when displayDrawer is false", () => {
		expect(wrapper1.exists(".Notifications")).to.equal(false);
	});

	it("Test that the menu item is being displayed when displayDrawer is true", () => {
		expect(wrapper2.exists(".menuItem")).to.equal(true);
	});

	it("Test that the div.Notifications is being displayed when displayDrawer is true", () => {
		expect(wrapper2.exists(".Notifications")).to.equal(true);
	});

	it("<Notifications /> renders three list items", () => {
		expect(wrapper2.render()).to.not.be.an('undefined');
		expect(wrapper2.find(NotificationItem)).to.have.lengthOf(3);
	});

	it("Tests that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is", () => {
		let props1 = {
			displayDrawer: true,
			listNotifications: [],
		};
		let wrapper1 = shallow(<Notifications shouldRender {...props1} />);
		expect(wrapper1.contains(<p>No new notification for now</p>)).to.equal(true);
	});

  it("Verify that 'markAsRead' function calling was with the right message", () => {
		const log = jest.spyOn(console, 'log');
		const wrapper = shallow(<Notifications />);
		wrapper.instance().markAsRead(100);
	});

	it("verify that when updating the props of the component with the same list, the component doesn’t rerender", () => {
		let notifComp = mount(<Notifications {...props2} />);

		expect(notifSpy);
		notifComp.setProps({ ...props2 });
		expect(notifSpy).to.not.be.true;
	});


	it("verify that when updating the props of the component with a longer list, the component does rerender", () => {
		let notifComp = mount(<Notifications {...props2} />);

		expect(notifSpy);
		notifComp.setProps({
			displayDrawer: true,
			listNotifications: [
				...props2.listNotifications,
				{
					id: 8967,
					type: "default",
					value: "New notif for test",
				},
			]
		});
		expect(notifSpy).to.not.be.false;
	});

});