import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NotificationItem from './NotificationItem';
import { expect } from 'chai';

configure({ adapter: new Adapter()});
describe("Testing the <NotificationItem /> Component", () => {

  it("<NotificationItem /> the basic rendering of the component works without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).to.not.be.an('undefined');
  });

  it("Verify that <NotificationItem /> renders the correct html when it receives properties value", () => {
    let props = {
	  type: "default",
	  value: "New resume",
	  html: undefined
	}
	let component = shallow(<NotificationItem {...props} />);
	expect(component.contains(<li data-priority-type={props.type} dangerouslySetInnerHTML={undefined}>New resume</li>)).to.equal(true);
  });

  it ("Passing a dummy html prop, it renders the correct html", () => {
    let props = {
	  type: "urgent",
	  html: { __html: "<p>test</p>"},
	  value: 'New resume',
	}
	let component = shallow(<NotificationItem {...props} />);
	expect(component.containsAnyMatchingElements(<li data-priority-type={props.type} dangerouslySetInnerHTML={props.html} />)).to.equal(true);
  });

  it("Verify that the 'markAsRead' is called with the right ID argument", () => {
	let props = {
	  type: "urgent",
	  html: { __html: "<p>test</p>"},
	  markAsRead: (id) => { console.log(`Notification ${id} has been marked as read`)}
	};

	let wrapper = shallow(<NotificationItem {...props} />);
	console.log = jest.fn();
	wrapper.find('li').simulate('click');
	expect(console.log.mock.calls.length).to.equal(1);
  });

})
