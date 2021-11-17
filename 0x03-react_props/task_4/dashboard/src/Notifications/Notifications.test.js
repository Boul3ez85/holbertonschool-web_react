import React from 'react';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

configure({adapter: new Adapter()});

describe("Testing the <Notifications /> ", () => {

  let propsOne = {
    displayDrawer: false
  };
  let propsTwo = {
    displayDrawer: true
  }
	
  let wrapper1;
  let wrapper2;

  beforeEach(() => {
	  wrapper1 = shallow(<Notifications {... propsOne} />);
    wrapper2 = shallow(<Notifications {... propsTwo} />);
  });

  it("<Notifications /> is rendered without crashing", () => {
	  expect(wrapper1.render()).to.not.be.an('undefined');
  });

  it("<Notifications /> renders three list items", () => {
	  expect(wrapper2.find(NotificationItem)).to.have.lengthOf(3);
  });

  it("<Notifications /> renders the first <NotificationItem /> with the exact html tag", () => {
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

});
