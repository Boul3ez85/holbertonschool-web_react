import React from 'react';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import BodySection from './BodySection';

configure({adapter: new Adapter()});

describe("Testing the <BodySection /> Component", () => {

	it("should render correctly the children and one h2 element", () => {
		let wrapper = shallow(
			<BodySection title="test title">
				<p>test children node</p>
			</BodySection>
		);

		expect(wrapper.containsAllMatchingElements([
			<h2>test title</h2>,
			<p>test children node</p>
		])).to.equal(true);
	});
});