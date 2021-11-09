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
		expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
	});
});
