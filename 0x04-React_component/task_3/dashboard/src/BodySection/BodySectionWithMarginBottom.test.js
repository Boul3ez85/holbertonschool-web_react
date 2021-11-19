import React from 'react';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

configure({adapter: new Adapter()});

describe("Testing the <BodySectionWithMarginBottom /> Component", () => {
	it("Renders the 'BodySection' Component correctly", () => {
		let props = {
			title: 'title',
			children: React.createElement('p', 'test child'),
		};

		let wrapper = shallow(
			<BodySectionWithMarginBottom {...props} />
		);

		expect(wrapper.containsAllMatchingElements([
			<div className="BodySectionWithMargin">
				<BodySection {...props} />
			</div>
		])).to.equal(true);
	});
});