import React from 'react';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Login from './Login';

configure({adapter: new Adapter()});
describe("Testing the <Login /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("<Login /> is rendered without crashing", () => {
    expect(wrapper).to.not.be.an('undefined');
  });

  it("<Login /> renderes 2 input tags", () => {
    expect(wrapper.find('input')).to.have.lengthOf(2);
  });

  it("<Login /> renderes 2 label tags", () => {
    expect(wrapper.find('label')).to.have.lengthOf(2);
  });
});
