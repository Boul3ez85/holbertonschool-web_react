import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, mount } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

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
		expect(wrapper.find(Notifications)).to.have.lengthOf(1);
	});

	it("<App /> contains the <Header /> Component", () => {
		expect(wrapper.contains(<Header />)).to.equal(true);
	});

	it("<App /> contains the <Login /> Component", () => {
		expect(wrapper.contains(<Login />)).to.equal(true);
	});

	it("<App /> contains the <Footer /> Component", () => {
		expect(wrapper.contains(<Footer />)).to.equal(true);
	});

	it("<App /> doesn't contain <CourseList />", () => {
		expect(wrapper.contains(<CourseList />)).to.equal(false);
	});

});

describe("Testing the <App /> when isLoggedIn is true", () => {
	let props = {
		isLoggedIn: true,
	};

	let component = shallow(<App {...props} />);
	expect(component.contains(<Login />)).to.equal(false);
	expect(component.find(CourseList)).to.have.lengthOf(1);
});

describe("verify that the alert function is called with the string 'Logging you out'", () => {
	const logOutFun = jest.fn(() => undefined);
	const myComp = mount(<App logOut={logOutFun} />);
	const log = jest.spyOn(console, 'log');

	expect(myComp.props.logOut);
	expect(log);

	jest.restoreAllMocks();
});
