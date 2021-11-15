import React from 'react';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Footer from './Footer';

configure({adapter: new Adapter()});
describe("Testing the <Footer /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("<Footer /> is rendered without crashing", () => {
    expect(wrapper).to.not.be.an('undefined');
  });

  it("<Footer /> renders at least the text: Copyright", () => {
    expect(wrapper.children('p').html()).to.include('Copyright');
  });
});