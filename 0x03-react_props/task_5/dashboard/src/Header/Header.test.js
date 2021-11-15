import React from 'react';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Header from './Header';

configure({adapter: new Adapter()});
describe("Testing the <Header /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("<Header /> is rendered without crashing", () => {
    expect(wrapper).to.not.be.an('undefined');
  });

  it("<Header /> renderes an image tag", () => {
    expect(wrapper.find('img')).to.have.lengthOf(1);
  });

  it("<Header /> renderes an h1 tag", () => {
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });
});
