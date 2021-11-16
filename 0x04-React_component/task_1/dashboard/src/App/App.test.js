import React from 'react';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

configure({adapter: new Adapter()});
describe("Testing the <App /> Component", () => {
	
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("<App /> is rendered without crashing", () => {
    expect(wrapper).to.not.be.an('undefined');
  });

  it("<App /> contains the <Notifications /> Component", () => {
		expect(wrapper.contains(<Notifications />)).to.equal(true);
	});

	it("<App /> contains the <Header /> Component", () => {
		expect(wrapper.contains(<Header />)).to.equal(true);
	});

	it("<App /> contains the <Login /> Component", () => {
		expect(wrapper.contains(<Login />)).to.equal(false);
	});

	it("<App /> contains the <Footer /> Component", () => {
		expect(wrapper.contains(<Footer />)).to.equal(true);
	});

	it('CourseList with isLoggedIn false', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.find('CourseList')).to.have.lengthOf(1);
	  });
	
	it('isLoggedIn is true', () => {
	  const wrapper = shallow(<App isLoggedIn />);
	  wrapper.update();
	  expect(wrapper.find('Login')).to.have.lengthOf(0);
	  expect(wrapper.find('CourseList')).to.have.lengthOf(1);
	});
});

describe('logOut should alert with correct message', () => {
	const LogOutState = jest.fn(() => undefined);
	const comp = mount(<App logOut={LogOutState} />);
	const logResult = jest.spyOn(console, 'log');

	expect(comp.props.logOut);
	expect(logResult);

	jest.restoreAllMocks();

});
