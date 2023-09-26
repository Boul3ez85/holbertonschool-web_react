import React from 'react';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

configure({adapter: new Adapter()});

describe("<BodySectionWithMarginBottom />", () => {

  it("BodySectionWithMarginBottom renders without crashing", () => {

    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.exists()).to.be.equal(true);
  });

  it("Shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    const BodySection = wrapper.find("BodySection");

    expect(BodySection).to.have.lengthOf(1);
    expect(BodySection.props().title).to.be.equal("test title");

    const internalBody = BodySection.dive();

    const h2 = internalBody.find("h2");
    const p = internalBody.find("p");

    expect(h2).to.have.lengthOf(1);
    expect(h2.text()).to.be.equal("test title");

    expect(p).to.have.lengthOf(1);
    expect(p.text()).to.be.equal("test children node");
  });

});

